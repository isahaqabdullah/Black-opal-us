'use client';

import { ArrowRight, Download, ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { usePageCopyDataAttribute, useSanityDataAttribute } from '../cms/visualEditingAttributes';
import { applicationsForProduct } from '../content/productApplicationRelationships';
import { useSiteContent } from '../content/SiteContentProvider';
import { NotFoundPage } from './NotFoundPage';
import { PageIntro } from './PageIntro';

export function ProductDetailPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { applications, pageCopy, productMap, status } = useSiteContent();
  const product = productSlug ? productMap[productSlug] : undefined;
  const relatedApplications = product ? applicationsForProduct(product.slug, applications) : [];
  const copy = pageCopy.productDetailPage;
  const pageCopyDataAttribute = usePageCopyDataAttribute();
  const sanityDataAttribute = useSanityDataAttribute();

  if (!product && status === 'loading') {
    return null;
  }

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <PageIntro
        label={copy.introLabel}
        title={product.name}
        description={product.summary}
        breadcrumbs={[
          {
            label: copy.productsBreadcrumbLabel,
            to: copy.productsPath,
            dataSanity: pageCopyDataAttribute('productDetailPage.productsBreadcrumbLabel'),
          },
          { label: product.shortName, dataSanity: sanityDataAttribute('product', product._id, 'shortName') },
        ]}
        dataSanity={{
          label: pageCopyDataAttribute('productDetailPage.introLabel'),
          title: sanityDataAttribute('product', product._id, 'name'),
          description: sanityDataAttribute('product', product._id, 'summary'),
        }}
      />

      <section className="pb-6 md:pb-8">
        <div className="premium-shell">
          <div className="premium-split-grid items-start">
            <div className="premium-image-frame premium-image-animated premium-reveal premium-reveal-delay-1 w-full max-w-[42rem]">
              <img
                data-sanity={sanityDataAttribute('product', product._id, 'imageUrl')}
                src={product.image}
                alt={product.name}
                className="w-full aspect-[16/9] max-h-[28rem] object-cover"
              />
            </div>

            <div data-sanity-edit-target className="premium-panel-soft premium-reveal premium-reveal-delay-2 p-6 md:p-7">
              <span
                data-sanity={pageCopyDataAttribute('productDetailPage.overviewLabel')}
                className="text-[#8f835f] text-[10px] tracking-[0.22em] uppercase block mb-3"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {copy.overviewLabel}
              </span>
              <p
                data-sanity={sanityDataAttribute('product', product._id, 'intro')}
                className="premium-copy text-[14px] leading-[1.65] mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {product.intro}
              </p>

              <div className="space-y-3 mb-6">
                {product.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlight}
                    data-sanity={sanityDataAttribute('product', product._id, `highlights[${highlightIndex}]`)}
                    className="flex items-start gap-3 text-[15px] text-[#d7c7a2]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#d4ae5b] rounded-full mt-2 shrink-0 shadow-[0_0_12px_rgba(212,174,91,0.65)]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {product.productNames?.length ? (
                <div className="pt-6 border-t border-[#c9a24d]/10">
                  <span
                    data-sanity={pageCopyDataAttribute('productDetailPage.productListLabel')}
                    className="text-[#8f835f] text-[10px] tracking-[0.22em] uppercase block mb-3"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {copy.productListLabel}
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {product.productNames.map((productName, productNameIndex) => (
                      <li
                        key={productName}
                        data-sanity={sanityDataAttribute(
                          'product',
                          product._id,
                          `productNames[${productNameIndex}]`,
                        )}
                        className="premium-secondary-btn text-[12px] px-3 py-1.5 rounded-full"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {productName}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="pt-6 border-t border-[#c9a24d]/10">
                <span
                  data-sanity={pageCopyDataAttribute('productDetailPage.applicationsLabel')}
                  className="text-[#8f835f] text-[10px] tracking-[0.22em] uppercase block mb-3"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {copy.applicationsLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {relatedApplications.map((application) => (
                    <Link
                      key={application.slug}
                      href={`/applications/${application.slug}`}
                      className="premium-link-btn inline-flex items-center gap-2 text-[12px] px-3 py-1.5 rounded-full"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      {application.name}
                      <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.catalogues?.length ? (
        <section className="pt-4 pb-10 md:pt-5 md:pb-12">
          <div className="premium-shell">
            <div data-sanity-edit-target className="mb-7 max-w-3xl">
              <span
                data-sanity={pageCopyDataAttribute('productDetailPage.cataloguesLabel')}
                className="premium-kicker text-[10px] tracking-[0.22em] uppercase block mb-3"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {copy.cataloguesLabel}
              </span>
              <h2
                data-sanity={pageCopyDataAttribute('productDetailPage.cataloguesTitle')}
                className="premium-heading premium-heading-elevated text-[clamp(1.7rem,2.8vw,2.35rem)] leading-[1.06] mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {copy.cataloguesTitle}
              </h2>
              <p
                data-sanity={pageCopyDataAttribute('productDetailPage.cataloguesDescription')}
                className="premium-copy text-[14px] leading-[1.65]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {copy.cataloguesDescription}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {product.catalogues.map((catalogue, catalogueIndex) => {
                const cataloguePath = catalogue._key
                  ? `catalogues[_key=="${catalogue._key}"]`
                  : `catalogues[${catalogueIndex}]`;
                const pageLabel = catalogue.pageCount === 1 ? 'page' : 'pages';

                return (
                  <article
                    key={catalogue._key ?? catalogue.documentUrl}
                    data-sanity-edit-target
                    className="premium-panel-soft premium-card-animated premium-reveal overflow-hidden flex h-full flex-col"
                    style={{ animationDelay: `${120 + catalogueIndex * 90}ms` }}
                  >
                    <a
                      href={catalogue.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${catalogue.title} PDF in a new tab`}
                      className="group block overflow-hidden border-b border-[#c9a24d]/10 bg-[#090907]"
                    >
                      <img
                        data-sanity={sanityDataAttribute(
                          'product',
                          product._id,
                          `${cataloguePath}.coverImage`,
                        )}
                        src={catalogue.coverImage}
                        alt=""
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </a>

                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <span
                        data-sanity={sanityDataAttribute(
                          'product',
                          product._id,
                          `${cataloguePath}.productName`,
                        )}
                        className="text-[#8f835f] text-[10px] tracking-[0.22em] uppercase block mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {catalogue.productName}
                      </span>
                      <h3
                        data-sanity={sanityDataAttribute(
                          'product',
                          product._id,
                          `${cataloguePath}.title`,
                        )}
                        className="premium-card-heading text-[18px] leading-[1.25] mb-3"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        {catalogue.title}
                      </h3>
                      <p
                        data-sanity={sanityDataAttribute(
                          'product',
                          product._id,
                          `${cataloguePath}.description`,
                        )}
                        className="premium-copy text-[14px] leading-[1.65] mb-4"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                      >
                        {catalogue.description}
                      </p>
                      <div
                        className="mt-auto flex items-center gap-2 text-[12px] text-[#8f835f]"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        <FileText size={14} aria-hidden="true" />
                        <span>PDF</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {catalogue.pageCount} {pageLabel}
                        </span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2 border-t border-[#c9a24d]/10 pt-5">
                        <a
                          href={catalogue.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${catalogue.title} PDF in a new tab`}
                          className="premium-primary-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px]"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          {copy.viewCatalogueLabel}
                          <ExternalLink size={13} aria-hidden="true" />
                        </a>
                        <a
                          href={catalogue.documentUrl}
                          download
                          aria-label={`Download ${catalogue.title} PDF`}
                          className="premium-secondary-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px]"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          {copy.downloadCatalogueLabel}
                          <Download size={13} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pt-4 pb-10 md:pt-5 md:pb-12">
        <div className="premium-shell space-y-6">
          {product.sections.map((section, index) => {
            const sectionPath = section._key ? `sections[_key=="${section._key}"]` : `sections[${index}]`;

            return (
              <div
                key={section.title}
                data-sanity-edit-target
                className="premium-panel-soft premium-card-animated premium-reveal p-6 md:p-7"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <h2
                  data-sanity={sanityDataAttribute('product', product._id, `${sectionPath}.title`)}
                  className="premium-heading premium-heading-elevated text-[clamp(1.45rem,2.2vw,1.9rem)] leading-[1.08] mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {section.title}
                </h2>
                <p
                  data-sanity={sanityDataAttribute('product', product._id, `${sectionPath}.body`)}
                  className="premium-copy text-[14px] leading-[1.65]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  {section.body}
                </p>
                {section.bullets?.length ? (
                  <div className="space-y-2 mt-5">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bullet}
                        data-sanity={sanityDataAttribute('product', product._id, `${sectionPath}.bullets[${bulletIndex}]`)}
                        className="flex items-start gap-3 text-[15px] text-[#d7c7a2]"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#d4ae5b] rounded-full mt-2 shrink-0 shadow-[0_0_12px_rgba(212,174,91,0.65)]" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="premium-shell">
          <div className="premium-panel flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-6 py-7 md:px-8">
            <div>
              <h2
                data-sanity={pageCopyDataAttribute('productDetailPage.ctaTitle')}
                className="premium-heading text-[1.5rem] mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {copy.ctaTitle}
              </h2>
              <p
                data-sanity={pageCopyDataAttribute('productDetailPage.ctaDescription')}
                className="premium-copy text-[14px]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {copy.ctaDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={copy.allProductsCtaPath}
                className="premium-secondary-btn inline-flex items-center gap-2 text-[14px] px-5 py-2.5 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {copy.allProductsCtaLabel}
              </Link>
              <Link
                href={copy.quoteCtaPath}
                className="premium-primary-btn inline-flex items-center gap-2 text-[14px] px-5 py-2.5 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {copy.quoteCtaLabel}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
