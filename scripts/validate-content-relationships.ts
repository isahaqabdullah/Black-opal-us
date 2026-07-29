import { existsSync } from 'node:fs';
import path from 'node:path';
import { applications, products } from '../src/app/content/siteContent';
import { productBrandingBySlug } from '../src/app/content/productBranding';
import { applicationsForProduct } from '../src/app/content/productApplicationRelationships';
import { supplierLandingPages } from '../src/app/content/supplierLandingPages';

const errors: string[] = [];
const productSlugs = new Set(products.map((product) => product.slug));
const applicationSlugs = new Set(applications.map((application) => application.slug));
const applicationMap = new Map(
  applications.map((application) => [application.slug, application]),
);
const catalogueUrls = new Set<string>();

function publicAssetExists(assetUrl: string) {
  return assetUrl.startsWith('/') && existsSync(path.join(process.cwd(), 'public', assetUrl.slice(1)));
}

function sameMembers(left: readonly string[], right: readonly string[]) {
  return (
    left.length === right.length &&
    left.every((value) => right.includes(value)) &&
    right.every((value) => left.includes(value))
  );
}

for (const [slug, branding] of Object.entries(productBrandingBySlug)) {
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    errors.push(`Missing canonically branded product "${slug}".`);
    continue;
  }

  if (product.name !== branding.name) {
    errors.push(`${slug} must use the canonical name "${branding.name}".`);
  }

  if (product.shortName !== branding.shortName) {
    errors.push(`${slug} must use the canonical short name "${branding.shortName}".`);
  }

  if (!sameMembers(product.productNames ?? [], branding.productNames)) {
    errors.push(`${slug} must list the canonical products: ${branding.productNames.join(', ')}.`);
  }

  for (const productName of branding.productNames) {
    const hasCatalogue = product.catalogues?.some((catalogue) =>
      catalogue.productName.toLowerCase().startsWith(productName.toLowerCase()),
    );

    if (!hasCatalogue) {
      errors.push(`${slug} must include a catalogue for "${productName}".`);
    }
  }
}

for (const application of applications) {
  const uniqueRecommendations = new Set(application.recommendedProducts);

  if (uniqueRecommendations.size !== application.recommendedProducts.length) {
    errors.push(`${application.slug} contains duplicate recommended products.`);
  }

  for (const productSlug of application.recommendedProducts) {
    if (!productSlugs.has(productSlug)) {
      errors.push(`${application.slug} references unknown product "${productSlug}".`);
    }
  }
}

for (const product of products) {
  if (applicationsForProduct(product.slug, applications).length === 0) {
    errors.push(`${product.slug} is not referenced by any application.`);
  }

  for (const catalogue of product.catalogues ?? []) {
    if (catalogueUrls.has(catalogue.documentUrl)) {
      errors.push(`Duplicate catalogue URL "${catalogue.documentUrl}".`);
    }
    catalogueUrls.add(catalogue.documentUrl);

    if (!publicAssetExists(catalogue.documentUrl)) {
      errors.push(`${product.slug} catalogue PDF is missing: ${catalogue.documentUrl}.`);
    }

    if (!publicAssetExists(catalogue.coverImage)) {
      errors.push(`${product.slug} catalogue cover is missing: ${catalogue.coverImage}.`);
    }
  }
}

for (const page of supplierLandingPages) {
  for (const productSlug of page.productSlugs) {
    if (!productSlugs.has(productSlug)) {
      errors.push(`${page.slug} references unknown product "${productSlug}".`);
    }
  }

  for (const applicationSlug of page.applicationSlugs) {
    if (!applicationSlugs.has(applicationSlug)) {
      errors.push(`${page.slug} references unknown application "${applicationSlug}".`);
    }
  }

  const hasProductMatch = page.applicationSlugs.every((applicationSlug) => {
    const application = applicationMap.get(applicationSlug);
    return application?.recommendedProducts.some((slug) => page.productSlugs.includes(slug));
  });

  if (!hasProductMatch) {
    errors.push(`${page.slug} contains an application with no matching selected product.`);
  }

  if (page.productSlugs.length === 1 && page.slug.endsWith('-activated-carbon-supplier')) {
    const productSlug = page.productSlugs[0];
    const expectedApplications = applicationsForProduct(productSlug, applications).map(
      (application) => application.slug,
    );

    if (!sameMembers(page.applicationSlugs, expectedApplications)) {
      errors.push(
        `${page.slug} must list every canonical application for product "${productSlug}".`,
      );
    }
  }

  if (page.slug.startsWith('activated-carbon-for-')) {
    const primaryApplication = applicationMap.get(page.applicationSlugs[0]);

    if (
      primaryApplication &&
      !sameMembers(page.productSlugs, primaryApplication.recommendedProducts)
    ) {
      errors.push(
        `${page.slug} product selection must match application "${primaryApplication.slug}".`,
      );
    }
  }
}

if (errors.length) {
  throw new Error(`Content relationship validation failed:\n- ${errors.join('\n- ')}`);
}

console.log(
  `Validated ${products.length} products, ${applications.length} applications, and ${supplierLandingPages.length} supplier pages.`,
);
