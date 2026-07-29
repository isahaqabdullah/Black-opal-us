export type ProductBranding = {
  name: string;
  shortName: string;
  productNames: readonly string[];
  seoTitle: string;
  legacyNames: readonly string[];
  legacyShortNames: readonly string[];
  legacySeoTitles: readonly string[];
};

export const productBrandingBySlug = {
  impregnated: {
    name: 'AMMONYX, RESPIRAX - Impregnated Carbon',
    shortName: 'AMMONYX, RESPIRAX',
    productNames: ['AMMONYX', 'RESPIRAX'],
    seoTitle: 'AMMONYX, RESPIRAX - Impregnated Carbon | Black Opal Carbons',
    legacyNames: ['Impregnated Activated Carbon'],
    legacyShortNames: ['Impregnated'],
    legacySeoTitles: ['Impregnated Activated Carbon | Black Opal Carbons'],
  },
  catalytic: {
    name: 'CatCarb & CatalyX - CATCARB',
    shortName: 'CatCarb & CatalyX',
    productNames: ['CatCarb', 'CatalyX'],
    seoTitle: 'CatCarb & CatalyX - CATCARB | Black Opal Carbons',
    legacyNames: ['Catalytic Activated Carbon'],
    legacyShortNames: ['Catalytic'],
    legacySeoTitles: ['Catalytic Activated Carbon | Black Opal Carbons'],
  },
} as const satisfies Record<string, ProductBranding>;

export function productBrandingForSlug(slug: string): ProductBranding | undefined {
  return productBrandingBySlug[slug as keyof typeof productBrandingBySlug];
}
