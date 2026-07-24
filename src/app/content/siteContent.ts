import { companyDetails, siteConfig } from '../config/siteConfig';
export { companyDetails } from '../config/siteConfig';

export type SiteMetric = {
  _key?: string;
  value: string;
  label: string;
};

export type ContentSection = {
  _key?: string;
  title: string;
  body: string;
  bullets?: string[];
};

export type SeoFields = {
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  noIndex?: boolean;
};

export type HomePageContent = {
  _id?: string;
  _type?: 'homePage';
  siteId?: string;
  seo?: SeoFields;
  heroLogoImage: string;
  heroLogoAlt: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCtaPath: string;
  heroPrimaryCtaLabel: string;
  heroSecondaryCtaPath: string;
  heroSecondaryCtaLabel: string;
  heroLegacyLabel: string;
  heroVideoUrl: string;
  heroVideoLabel: string;
  heroVideoFallback: string;
  trustCertificationLabel: string;
  trustCertificationValue: string;
  trustCertificationLinkLabel: string;
  trustCertificationLinkUrl: string;
  trustEstablishedLabel: string;
  trustEstablishedValue: string;
  trustProductionLabel: string;
  trustProductionValue: string;
  trustCapacityLabel: string;
  trustCapacityValue: string;
  productSectionKicker: string;
  productSectionTitle: string;
  applicationSectionKicker: string;
  applicationSectionTitle: string;
  productCardCtaLabel: string;
  applicationCardCtaLabel: string;
  companyImage: string;
  companyImageAlt: string;
  companyEyebrow: string;
  companyTitle: string;
  companyBodyPrimary: string;
  companyBodySecondary: string;
  companyMetrics: SiteMetric[];
  companyAboutCtaPath: string;
  companyAboutCtaLabel: string;
  companyProductionCtaPath: string;
  companyProductionCtaLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryPath: string;
  ctaPrimaryLabel: string;
  ctaSecondaryPath: string;
  ctaSecondaryLabel: string;
  whyKicker: string;
  whyTitle: string;
  whyReasons: FeatureCardEntry[];
  featuredCapabilitiesLabel: string;
  featuredCapabilitiesPreviousLabel: string;
  featuredCapabilitiesNextLabel: string;
  featuredCapabilitiesShowLabelPrefix: string;
  featuredCapabilities: FeaturedCapabilityEntry[];
};

export type ProductionPageContent = {
  _id?: string;
  _type?: 'productionPage';
  seo?: SeoFields;
  intro: PageIntroContent;
  glanceLabel: string;
  glanceItems: LabelValueEntry[];
  overviewTitle: string;
  overviewBody: string;
  image: string;
  imageAlt: string;
  qualityKicker: string;
  qualityTitle: string;
  qualityParagraphs: string[];
  activationKicker: string;
  activationSteps: ProductionStepEntry[];
  activationNote: string;
  packagingKicker: string;
  packagingTitle: string;
  packagingBody: string;
  packagingMedia: PackagingMediaEntry[];
  packagingDocumentLabel: string;
  packagingDocumentUrl: string;
  contactTextBeforeEmail: string;
  contactTextAfterEmail: string;
  contactButtonLabel: string;
};

export type ProductEntry = {
  _id?: string;
  _type?: 'product';
  seo?: SeoFields;
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  intro: string;
  highlights: string[];
  commonUses: string[];
  grades?: string[];
  sections: ContentSection[];
  image: string;
};

export type ApplicationEntry = {
  _id?: string;
  _type?: 'application';
  seo?: SeoFields;
  slug: string;
  name: string;
  summary: string;
  intro: string;
  keyPoints: string[];
  recommendedProducts: string[];
  grades?: string[];
  sections: ContentSection[];
  image: string;
};

export type NewsroomItem = {
  _id?: string;
  _type?: 'newsroomItem';
  seo?: SeoFields;
  slug: string;
  title: string;
  type: 'press-release' | 'resource';
  summary: string;
  detail?: string[];
  bullets?: string[];
  documentUrl?: string;
  documentLabel?: string;
};

export type LinkEntry = {
  _key?: string;
  label: string;
  to: string;
};

export type LabelValueEntry = {
  _key?: string;
  value: string;
  label: string;
};

export type OfficeEntry = {
  _key?: string;
  label: string;
  name: string;
  address: string[];
  phone?: string;
  email?: string;
  note?: string;
};

export type FeatureIconName =
  | 'building-2'
  | 'factory'
  | 'headphones'
  | 'layers'
  | 'refresh-ccw'
  | 'shield-check'
  | 'target'
  | 'tree-palm'
  | 'truck';

export type FeatureCardEntry = {
  _key?: string;
  icon: FeatureIconName;
  title: string;
  desc: string;
};

export type PageIntroContent = {
  label: string;
  title: string;
  description?: string;
  breadcrumbLabel: string;
};

export type FeaturedCapabilityImageSource = 'application' | 'product' | 'url';

export type FeaturedCapabilityEntry = {
  _key?: string;
  label: string;
  title: string;
  copy: string;
  highlights: string[];
  imageSource: FeaturedCapabilityImageSource;
  imageSlug?: string;
  imageUrl?: string;
  imageAlt: string;
  to: string;
  cta: string;
};

export type ProductionStepEntry = {
  _key?: string;
  step: string;
  title: string;
  body: string;
};

export type PackagingMediaEntry = {
  _key?: string;
  mediaType: 'image' | 'video';
  title: string;
  caption: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaAlt: string;
};

export type SiteSettingsContent = {
  _id?: string;
  _type?: 'siteSettings';
  siteId?: string;
  navigation: {
    logoImage: string;
    logoAlt: string;
    links: LinkEntry[];
    ctaPath: string;
    ctaLabel: string;
    mobileMenuLabel: string;
  };
  footer: {
    logoImage: string;
    logoAlt: string;
    contactLinkPath: string;
    contactLinkLabel: string;
    companyColumnTitle: string;
    companyLinks: LinkEntry[];
    productColumnTitle: string;
    applicationColumnTitle: string;
    phoneLabel: string;
    emailLabel: string;
    copyrightText: string;
    bottomLinks: LinkEntry[];
  };
  pageIntro: {
    breadcrumbAriaLabel: string;
    homeLabel: string;
    homePath: string;
    backHomeLabel: string;
    backHomePath: string;
  };
  websiteContact: OfficeEntry;
  officeNetwork: OfficeEntry[];
};

export type PageCopyContent = {
  _id?: string;
  _type?: 'pageCopy';
  productsPage: {
    seo?: SeoFields;
    intro: PageIntroContent;
    highlightsLabel: string;
    commonUsesLabel: string;
    referencedGradesLabel: string;
    detailCtaLabel: string;
    quoteCtaPath: string;
    quoteCtaLabel: string;
  };
  productDetailPage: {
    introLabel: string;
    productsPath: string;
    productsBreadcrumbLabel: string;
    overviewLabel: string;
    commonUsesLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    allProductsCtaPath: string;
    allProductsCtaLabel: string;
    quoteCtaPath: string;
    quoteCtaLabel: string;
  };
  applicationsPage: {
    seo?: SeoFields;
    intro: PageIntroContent;
    itemLabel: string;
    keyPointsLabel: string;
    recommendedProductsLabel: string;
    detailCtaLabel: string;
    discussCtaPath: string;
    discussCtaLabel: string;
  };
  applicationDetailPage: {
    introLabel: string;
    applicationsPath: string;
    applicationsBreadcrumbLabel: string;
    overviewLabel: string;
    referencedGradesLabel: string;
    recommendedProductsLabel: string;
    recommendedProductsTitle: string;
    recommendedProductsDescription: string;
    discussCtaPath: string;
    discussCtaLabel: string;
  };
  newsroomPage: {
    seo?: SeoFields;
    intro: PageIntroContent;
    featuredUpdateLabel: string;
    brandDetailsCtaLabel: string;
    whyMattersLabel: string;
    whyMattersBody: string;
    resourcesTitle: string;
    resourcesDescription: string;
    resourceLabel: string;
    latestVersionCtaPath: string;
    latestVersionCtaLabel: string;
  };
  newsroomPreview: {
    kicker: string;
    title: string;
    description: string;
    resourceCenterCtaPath: string;
    resourceCenterCtaLabel: string;
    pressReleaseLabel: string;
    resourceLabel: string;
    brandUpdateCtaLabel: string;
    requestResourceCtaPath: string;
    requestResourceCtaLabel: string;
  };
  pressReleasePage: {
    introLabel: string;
    newsroomPath: string;
    newsroomBreadcrumbLabel: string;
    keyPointsLabel: string;
    salesCoordinationCtaPath: string;
    salesCoordinationCtaLabel: string;
  };
  notFoundPage: {
    seo?: SeoFields;
    label: string;
    title: string;
    description: string;
    homeCtaPath: string;
    homeCtaLabel: string;
    secondaryCtaPath: string;
    secondaryCtaLabel: string;
  };
};

export type AboutPageContent = {
  _id?: string;
  _type?: 'aboutPage';
  siteId?: string;
  seo?: SeoFields;
  intro: PageIntroContent;
  titleLogoImage: string;
  heroImage: string;
  heroImageAlt: string;
  storyTitle: string;
  storyParagraphs: string[];
  officeNetworkLabel: string;
  metrics: SiteMetric[];
  cards: FeatureCardEntry[];
  brandUpdateLabel: string;
  brandTransitionCtaLabel: string;
  productionCapabilityCtaLabel: string;
};

export type ContactPageContent = {
  _id?: string;
  _type?: 'contactPage';
  siteId?: string;
  seo?: SeoFields;
  intro: PageIntroContent;
  officesTitle: string;
  successTitle: string;
  successMessage: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  phoneLabel: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  applicationLabel: string;
  applicationPlaceholder: string;
  applicationOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export const homePageContent: HomePageContent = {
  siteId: siteConfig.siteId,
  heroLogoImage: '/images/black-opal-hero-logo-user-clean.png?v=20260611-purity-bigger-transparent',
  heroLogoAlt: siteConfig.siteName,
  heroKicker: siteConfig.heroKicker,
  heroTitle: siteConfig.heroTitle,
  heroDescription: siteConfig.heroDescription,
  heroPrimaryCtaPath: '/contact',
  heroPrimaryCtaLabel: 'Request a Quote',
  heroSecondaryCtaPath: '/contact',
  heroSecondaryCtaLabel: 'Talk to Technical Sales',
  heroLegacyLabel: 'Formerly Indocarb AC LLC',
  heroVideoUrl: '/images/blackopal-home-page-video.mp4',
  heroVideoLabel: 'Black Opal home page video',
  heroVideoFallback: 'Your browser does not support the video tag.',
  trustCertificationLabel: 'Certifications',
  trustCertificationValue: 'NSF 42 · NSF 61 · Prop 65 Compliant',
  trustCertificationLinkLabel: '',
  trustCertificationLinkUrl: '',
  trustEstablishedLabel: 'Established',
  trustEstablishedValue: 'Since 2010',
  trustProductionLabel: 'Production',
  trustProductionValue: `${siteConfig.productionCenterCount} Production Centers`,
  trustCapacityLabel: 'Capacity',
  trustCapacityValue: '50 million lbs',
  productSectionKicker: 'Product Categories',
  productSectionTitle: 'Application-matched grades for every process',
  applicationSectionKicker: 'Applications',
  applicationSectionTitle: 'Industries we serve',
  productCardCtaLabel: 'Grade details',
  applicationCardCtaLabel: 'Application fit',
  companyImage:
    'https://images.unsplash.com/photo-1554070211-e3953a3de374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHdhcmVob3VzZSUyMGZhY3RvcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU0NzU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  companyImageAlt: 'Manufacturing facility',
  companyEyebrow: siteConfig.companyEyebrow,
  companyTitle: siteConfig.companyTitle,
  companyBodyPrimary: siteConfig.companyBodyPrimary,
  companyBodySecondary: siteConfig.companyBodySecondary,
  companyMetrics: [
    { value: '2010', label: 'Year established' },
    { value: siteConfig.productionCenterCount, label: 'Production centers' },
    { value: '50 million lbs', label: 'Annual capacity' },
  ],
  companyAboutCtaPath: '/about',
  companyAboutCtaLabel: 'About Black Opal',
  companyProductionCtaPath: '/production',
  companyProductionCtaLabel: 'View production',
  ctaTitle: 'Grade selection starts with the process',
  ctaDescription: 'Mesh size, activity, washing, compliance, and delivery requirements shape the final recommendation.',
  ctaPrimaryPath: '/contact',
  ctaPrimaryLabel: 'Request Quote/TDS',
  ctaSecondaryPath: '/activated-carbon-suppliers/bulk-activated-carbon-supplier',
  ctaSecondaryLabel: 'Bulk manufacturing capability',
  whyKicker: `Why ${siteConfig.siteName}`,
  whyTitle: 'High-performance activated carbon backed by quality, innovation, service, and reliability',
  whyReasons: [
    {
      icon: 'tree-palm',
      title: 'Coconut Shell Specialization',
      desc:
        'Selected coconut shells support high hardness, low ash, micropore structure, and attrition resistance for premium activated carbon.',
    },
    {
      icon: 'target',
      title: 'Consistent Quality',
      desc:
        'Quality control starts at raw material selection and continues through activation, sizing, packing, and final assurance.',
    },
    {
      icon: 'layers',
      title: 'Application-Specific Grades',
      desc:
        'Granular, powder, impregnated, and catalytic formats are matched to contaminant profile, contact time, and operating conditions.',
    },
    {
      icon: 'truck',
      title: 'Supply Reliability',
      desc: siteConfig.logisticsSummary,
    },
    {
      icon: 'headphones',
      title: 'Technical Support',
      desc:
        'Sales and technical teams review application conditions, target contaminants, mesh size, activity, and compliance requirements before recommending a grade.',
    },
    {
      icon: 'shield-check',
      title: 'Certifications & Compliance',
      desc: 'NSF 42, NSF 61, and California Prop 65 compliant water-treatment grades are manufactured in ISO accredited facilities.',
    },
  ],
  featuredCapabilitiesLabel: 'Featured Capabilities',
  featuredCapabilitiesPreviousLabel: 'Previous featured capability',
  featuredCapabilitiesNextLabel: 'Next featured capability',
  featuredCapabilitiesShowLabelPrefix: 'Show',
  featuredCapabilities: [
    {
      label: 'Catalytic carbon',
      title: 'CATCARB for chloramine and H2S reduction',
      copy:
        'Surface-modified coconut shell catalytic carbon for water-treatment systems that need faster chloramine and hydrogen sulfide decomposition.',
      highlights: [
        'Built for chloramine-heavy drinking-water programs',
        'Also suited for hydrogen sulfide decomposition',
        'Maintains the hardness and attrition resistance expected from premium coconut shell carbon',
      ],
      imageSource: 'product',
      imageSlug: 'catalytic',
      imageAlt: 'Water treatment facility',
      to: '/products/catalytic',
      cta: 'View CATCARB',
    },
    {
      label: 'Gold recovery',
      title: 'High-hardness carbon for gold circuits',
      copy:
        'Microporous GC grades for CIP, CIL, CIC and tank-adsorbed systems where adsorption rate, loading capacity, low dust, and attrition resistance directly affect recovery.',
      highlights: [
        'Low platelet content and clean screening for reduced fines',
        'Strong gold adsorption rates for high-throughput circuits',
        'Durable coconut shell carbon for repeated mining service',
      ],
      imageSource: 'application',
      imageSlug: 'gold-recovery',
      imageAlt: 'Gold recovery industrial operation',
      to: '/applications/gold-recovery',
      cta: 'Gold recovery grades',
    },
    {
      label: 'Water treatment',
      title: 'Low-ash carbon for water programs',
      copy:
        'Granular, powder, impregnated, and catalytic grades support drinking water, process water, wastewater polishing, taste and odor control, and contaminant-specific filtration.',
      highlights: [
        'Low ash, high strength, and consistent particle-size distribution',
        'NSF 42, NSF 61, and Prop 65 compliant water-treatment grades',
        'Options for chlorine, chloramine, VOC, pesticide, THM, and odor reduction',
      ],
      imageSource: 'application',
      imageSlug: 'water-treatment',
      imageAlt: 'Clean drinking water treatment',
      to: '/applications/water-treatment',
      cta: 'Water applications',
    },
    {
      label: 'Custom grades',
      title: 'Tailored mesh, activity, washing, and impregnation',
      copy:
        'Product recommendations can be adapted to the operating conditions, mesh-size target, pH or washing requirement, adsorption level, and contaminant profile.',
      highlights: [
        'Different mesh sizes and adsorption levels available',
        'pH-adjusted, washed, impregnated, and specialty variants',
        'Grade selection matched to application requirements',
      ],
      imageSource: 'product',
      imageSlug: 'granular',
      imageAlt: 'Activated carbon granules',
      to: '/products',
      cta: 'Explore products',
    },
  ],
};

export const productionPageContent: ProductionPageContent = {
  seo: {
    seoTitle: 'Activated Carbon Production and Quality Control | Black Opal Carbons',
    seoDescription:
      'Black Opal Carbons production scale is supported by coconut shell raw-material control, steam activation, particle-size screening, export readiness, and quality assurance.',
    noIndex: false,
  },
  intro: {
    label: 'Production',
    title: 'Manufacturing',
    description:
      'Consistent quality, multiple grades and dependable delivery for water treatment, air and gas purification, gold recovery and industrial applications',
    breadcrumbLabel: 'Production',
  },
  glanceLabel: 'Production at a glance',
  glanceItems: [
    {
      value: '50 million lbs',
      label: 'Annual capacity',
    },
    {
      value: 'Steam activated',
      label: 'Two-stage method',
    },
    {
      value: 'Custom mesh',
      label: 'Application-specific sizing',
    },
  ],
  overviewTitle: 'Our coconut activated carbon facility in India is the largest in the region',
  overviewBody:
    'Our coconut activated carbon facility in India is the largest in the region with annual production capacity of 50 million pounds of carbon. Black Opal Group factories pursue uncompromising quality standards in all stages of process and operation activities. For this, a meticulous quality control program is operated throughout the entire process from selection of raw material to final quality assurance prior to shipment.',
  image: '/images/production-facility.avif',
  imageAlt: 'Black Opal production facility',
  qualityKicker: 'Quality program',
  qualityTitle: 'Uncompromising Quality Standards',
  qualityParagraphs: [
    'Our craving for uncompromising quality starts at the selection of raw material itself. Charcoal is sourced from selected outlets after rigorous quality inspections.',
    "Our factories employ state-of-the-art equipment and technology and are supported by highly qualified and skilled technicians. No-compromise quality control is their top priority.",
    'Specially designed crushing and screening machines assure a great degree of control over particle size to precisely meet the application-specific mesh size range requirements of our customers. Quality of IndoCarb brand coconut carbon products has been extensively tested and acclaimed by major industry leaders and reputed laboratories around the world.',
  ],
  activationKicker: 'Steam activation method',
  activationSteps: [
    {
      step: '01',
      title: 'Carbonization',
      body:
        'Coconut shells in the form of lumps are carbonized to convert coconut shells to char or charcoal by pyrolysis, which is chemical decomposition by heating in the absence of oxygen. Temperatures usually do not exceed 700 C, reducing volatile content to less than 20%.',
    },
    {
      step: '02',
      title: 'Steam activation',
      body:
        'The carbonized base material is activated at high temperature, about 1,100 C / 2,012 F, in steam. The reaction between carbon and steam takes place at the internal surface, removing carbon from pore walls and enlarging the pores.',
    },
    {
      step: '03',
      title: 'Sizing and finishing',
      body:
        'Output from the rotary kiln is processed in the postproduction plant where it is crushed and screened to different sizes and to remove fines and dust for granular activated carbons. Powdered activated carbons are produced by further grinding the granules with a gentle pulverizing action.',
    },
  ],
  activationNote:
    'The steam activation process allows pore size to be readily altered and carbons can be produced to suit specific end uses. Activation temperature and activation time are important to create internal pore networks and impart surface chemistries inside each particle.',
  packagingKicker: 'Packaging and dispatch',
  packagingTitle: 'Prepared for palletized export shipment',
  packagingBody:
    'These examples show bagged activated carbon prepared with pallet stacking, strapping, stretch wrapping, batch labels, and warehouse-ready dispatch handling.',
  packagingMedia: [
    {
      _key: 'palletized-40-bag-shipment',
      mediaType: 'image',
      title: 'Palletized 40-bag shipment',
      caption:
        'Bagged activated carbon labeled, stacked on a wooden pallet, strapped, and stretch wrapped for dispatch.',
      imageUrl: '/images/packaging/export-palletized-bags.jpeg',
      mediaAlt: 'Palletized bagged activated carbon wrapped and strapped for export shipment',
    },
    {
      _key: 'warehouse-pallet-staging',
      mediaType: 'image',
      title: 'Warehouse pallet staging',
      caption:
        'Palletized bags staged in the warehouse with stretch wrapping and strapping before shipment handling.',
      imageUrl: '/images/packaging/warehouse-palletized-bags.jpeg',
      mediaAlt: 'Warehouse pallets of packaged activated carbon prepared for shipment',
    },
    {
      _key: 'yellow-packaging-carbon-bags',
      mediaType: 'image',
      title: 'Labeled bag and bulk packaging',
      caption:
        'Yellow retail bag and palletized bulk bags shown against activated carbon media for packaging reference.',
      imageUrl: '/images/packaging/yellow-packaging-carbon-bags.png',
      mediaAlt: 'Yellow Black Opal activated carbon retail bag and palletized bulk bags on activated carbon',
    },
    {
      _key: 'packaging-handling-video',
      mediaType: 'video',
      title: 'Packaging handling video',
      caption:
        'Short warehouse video showing palletized packaged carbon prepared for movement and dispatch.',
      videoUrl: '/videos/packaging/export-packaging-video.mp4',
      mediaAlt: 'Warehouse video of palletized packaged activated carbon',
    },
  ],
  packagingDocumentLabel: 'View packaging options',
  packagingDocumentUrl: '/documents/packaging/packaging-options.pdf',
  contactTextBeforeEmail:
    'For questions regarding manufacturing, technical specifications, or product enquiries, contact Black Opal at ',
  contactTextAfterEmail: '.',
  contactButtonLabel: 'Email production team',
};

export const siteMetrics: SiteMetric[] = [
  ...homePageContent.companyMetrics,
];

export const siteSettingsContent: SiteSettingsContent = {
  siteId: siteConfig.siteId,
  navigation: {
    logoImage: '/images/black-opal-nav-lockup.png?v=20260611-legacy-llc',
    logoAlt: 'Black Opal Carbons logo',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Applications', to: '/applications' },
      { label: 'Production', to: '/production' },
      { label: 'About', to: '/about' },
      { label: 'Resources', to: '/resources' },
      { label: 'Newsroom', to: '/newsroom' },
      { label: 'Contact', to: '/contact' },
    ],
    ctaPath: '/contact',
    ctaLabel: 'Request Quote/TDS',
    mobileMenuLabel: 'Toggle navigation menu',
  },
  footer: {
    logoImage: '/images/BlackOpallogo.avif',
    logoAlt: 'Black Opal Carbons logo',
    contactLinkPath: '/contact',
    contactLinkLabel: 'Contact Black Opal',
    companyColumnTitle: 'Company',
    companyLinks: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Production', to: '/production' },
      { label: 'Resources', to: '/resources' },
      { label: 'Newsroom', to: '/newsroom' },
      { label: 'Contact', to: '/contact' },
    ],
    productColumnTitle: 'Products',
    applicationColumnTitle: 'Applications',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    copyrightText: `© {year} ${siteConfig.siteName}. All rights reserved.`,
    bottomLinks: [
      { label: 'Home', to: '/' },
      { label: 'Resources', to: '/resources' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  pageIntro: {
    breadcrumbAriaLabel: 'Breadcrumb',
    homeLabel: 'Home',
    homePath: '/',
    backHomeLabel: 'Home',
    backHomePath: '/',
  },
  websiteContact: companyDetails.websiteContact,
  officeNetwork: companyDetails.officeNetwork,
};

export const pageCopyContent: PageCopyContent = {
  productsPage: {
    seo: {
      seoTitle: 'Activated Carbon Products | Black Opal Carbons',
      seoDescription:
        'Granular, powder, impregnated, and catalytic activated carbon products sit within the Black Opal portfolio for dependable regional and global supply.',
      noIndex: false,
    },
    intro: {
      label: 'Products',
      title: 'Coconut shell activated carbon product families',
      description:
        'Granular, powder, impregnated, and catalytic grades cover fixed-bed filtration, fast-response dosing, targeted gas treatment, chloramine reduction, and specialty process duties.',
      breadcrumbLabel: 'Products',
    },
    highlightsLabel: 'Highlights',
    commonUsesLabel: 'Common uses',
    referencedGradesLabel: 'Referenced grades',
    detailCtaLabel: 'Product details',
    quoteCtaPath: '/contact',
    quoteCtaLabel: 'Request quote',
  },
  productDetailPage: {
    introLabel: 'Product Detail',
    productsPath: '/products',
    productsBreadcrumbLabel: 'Products',
    overviewLabel: 'Overview',
    commonUsesLabel: 'Common uses',
    ctaTitle: 'Recommendations shaped by process conditions',
    ctaDescription:
      'Application, volume, and performance targets shape the grade match and technical recommendation.',
    allProductsCtaPath: '/products',
    allProductsCtaLabel: 'All products',
    quoteCtaPath: '/contact',
    quoteCtaLabel: 'Request quote',
  },
  applicationsPage: {
    seo: {
      seoTitle: 'Activated Carbon Applications | Black Opal Carbons',
      seoDescription:
        'Activated carbon solutions for water treatment, gold recovery, air and gas purification, oil and gas, chloramine removal, and specialty industrial processes.',
      noIndex: false,
    },
    intro: {
      label: 'Applications',
      title: 'Industrial activated carbon applications',
      description:
        'Water, gold recovery, air, gas, refinery, and specialty industrial programs each place different demands on hardness, pore structure, activity, and purity.',
      breadcrumbLabel: 'Applications',
    },
    itemLabel: 'Application',
    keyPointsLabel: 'Key points',
    recommendedProductsLabel: 'Recommended products',
    detailCtaLabel: 'Application details',
    discussCtaPath: '/contact',
    discussCtaLabel: 'Discuss with sales',
  },
  applicationDetailPage: {
    introLabel: 'Application Detail',
    applicationsPath: '/applications',
    applicationsBreadcrumbLabel: 'Applications',
    overviewLabel: 'Application overview',
    referencedGradesLabel: 'Referenced grades',
    recommendedProductsLabel: 'Recommended products',
    recommendedProductsTitle: 'Product families commonly tied to this application',
    recommendedProductsDescription:
      'These product families form the usual starting point for grade matching, performance review, and enquiry planning.',
    discussCtaPath: '/contact',
    discussCtaLabel: 'Discuss this application',
  },
  newsroomPage: {
    seo: {
      seoTitle: 'Newsroom and Resources | Black Opal Carbons',
      seoDescription:
        'Black Opal Carbons company updates and technical resources cover brand continuity, water treatment, gold recovery, catalytic carbon, and application guidance.',
      noIndex: false,
    },
    intro: {
      label: 'Newsroom',
      title: 'Company updates and product resources',
      breadcrumbLabel: 'Newsroom',
    },
    featuredUpdateLabel: 'Featured update',
    brandDetailsCtaLabel: 'Brand transition details',
    whyMattersLabel: 'Why it matters',
    whyMattersBody:
      'The Black Opal brand replaced Indocarb AC LLC while products, facilities, and customer-support continuity remained intact.',
    resourcesTitle: 'Product Resources',
    resourcesDescription:
      'Access product information and supporting documents for technical review, application discussions, and sales conversations with the Black Opal team.',
    resourceLabel: 'Product resource',
    latestVersionCtaPath: '/contact',
    latestVersionCtaLabel: 'Latest version',
  },
  newsroomPreview: {
    kicker: 'Newsroom',
    title: 'Resources and brand updates',
    description:
      'Technical notes and brand notices stay tied to the same products, facilities, and support channels customers already know.',
    resourceCenterCtaPath: '/newsroom',
    resourceCenterCtaLabel: 'Resource center',
    pressReleaseLabel: 'Press release',
    resourceLabel: 'Resource',
    brandUpdateCtaLabel: 'Brand update',
    requestResourceCtaPath: '/contact',
    requestResourceCtaLabel: 'Request resource',
  },
  pressReleasePage: {
    introLabel: 'Press Release',
    newsroomPath: '/newsroom',
    newsroomBreadcrumbLabel: 'Newsroom',
    keyPointsLabel: 'Key points',
    salesCoordinationCtaPath: '/contact',
    salesCoordinationCtaLabel: 'Sales coordination',
  },
  notFoundPage: {
    seo: {
      seoTitle: 'Page Not Found | Black Opal Carbons',
      seoDescription: 'The requested Black Opal Carbons page could not be found.',
      noIndex: true,
    },
    label: 'Page not found',
    title: 'That page could not be found',
    description:
      'Core product, application, production, newsroom, and contact routes remain available through the main navigation.',
    homeCtaPath: '/',
    homeCtaLabel: 'Home',
    secondaryCtaPath: '/products',
    secondaryCtaLabel: 'Product families',
  },
};

export const aboutPageContent: AboutPageContent = {
  siteId: siteConfig.siteId,
  seo: {
    seoTitle: `About ${siteConfig.siteName} | Black Opal Carbons`,
    seoDescription:
      `${siteConfig.siteName}${companyDetails.legacyName ? `, formerly ${companyDetails.legacyName},` : ''} manufactures coconut shell activated carbon in India through company-owned production and supports United States and North American customers through Black Opal Group Headquarters in Pittsburgh.`,
    noIndex: false,
  },
  intro: {
    label: 'About',
    title: 'Black Opal Carbons',
    breadcrumbLabel: 'About',
  },
  titleLogoImage: '/images/black-opal-hero-logo-transparent.png',
  heroImage:
    'https://images.unsplash.com/photo-1554070211-e3953a3de374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  heroImageAlt: 'Black Opal manufacturing facility',
  storyTitle: 'Reliability, consistency, and service since 2010',
  storyParagraphs: [
    'The group was established in 2010 as a joint venture between the largest privately owned coconut shell activated carbon manufacturer in India and some of the highly experienced entrepreneurs in activated carbon industry with combined experience of over 50 years in the field.',
    'Over the years, the group has become one of the most recognized brands in the industry, with a reputation based on quality, innovation, service and reliability.',
    'Company owned and operated manufacturing facilities means higher quality standards, reliability and consistency.',
    'The state-of-the-art factory in India has a production capacity of 50 million pounds of coconut activated carbon and has been serving the industry for years. We commit to provide our clients with value-added products and services; we further strive to exceed their expectations and keep them continuously informed through personable, honest and open communications. The secret of our success is our vision towards customer service and satisfaction, 24 hours per day and 7 days a week.',
  ],
  officeNetworkLabel: 'Office network',
  metrics: siteMetrics,
  cards: [
    {
      icon: 'factory',
      title: 'Joint venture roots',
      desc:
        'The group was established in 2010 as a joint venture between the largest privately owned coconut shell activated carbon manufacturer in India and highly experienced activated carbon entrepreneurs.',
    },
    {
      icon: 'building-2',
      title: companyDetails.marketBaseTitle,
      desc: companyDetails.marketBaseDescription,
    },
    {
      icon: 'shield-check',
      title: 'Quality and reliability',
      desc:
        'Company owned and operated manufacturing facilities means higher quality standards, reliability and consistency.',
    },
    {
      icon: 'refresh-ccw',
      title: 'Brand transition',
      desc:
        'The Indocarb AC LLC transition to Black Opal Carbons preserved the products, facilities, service structure, and support team customers already worked with.',
    },
  ],
  brandUpdateLabel: 'Brand update',
  brandTransitionCtaLabel: 'Brand transition',
  productionCapabilityCtaLabel: 'Production capability',
};

export const contactPageContent: ContactPageContent = {
  siteId: siteConfig.siteId,
  seo: {
    seoTitle: 'Enquiry and Technical Recommendations | Black Opal Carbons',
    seoDescription:
      `${siteConfig.siteName} product enquiries and technical recommendations connect application requirements with ${siteConfig.originDescription}.`,
    noIndex: false,
  },
  intro: {
    label: 'Contact',
    title: siteConfig.contactTitle,
    description: siteConfig.contactDescription,
    breadcrumbLabel: 'Contact',
  },
  officesTitle: siteConfig.additionalOfficesTitle,
  successTitle: 'Thank you for your enquiry',
  successMessage:
    'Thank you for your enquiry. The Black Opal team will review the details and respond promptly.',
  firstNameLabel: 'First Name *',
  firstNamePlaceholder: 'First name',
  lastNameLabel: 'Last Name *',
  lastNamePlaceholder: 'Last name',
  emailLabel: 'Email *',
  emailPlaceholder: 'you@company.com',
  companyLabel: 'Company *',
  companyPlaceholder: 'Company name',
  phoneLabel: 'Phone',
  subjectLabel: 'Subject *',
  subjectPlaceholder: 'Quote request, enquiry, technical support',
  applicationLabel: 'Application / Use Case *',
  applicationPlaceholder: 'Select application',
  applicationOptions: [
    'Water Treatment',
    'Gold Recovery',
    'Air & Gas',
    'Oil & Gas',
    'Catalytic / Chloramine Removal',
    'Other Applications',
  ],
  messageLabel: 'Message *',
  messagePlaceholder:
    'Tell Black Opal what product family, application, volume, and performance target you need.',
  submitLabel: 'Send enquiry',
};

export const products: ProductEntry[] = [
  {
    slug: 'granular',
    name: 'Granular Activated Carbon',
    shortName: 'Granular',
    summary:
      'Granular Activated Carbon for gold recovery, water treatment, solvent recovery, condensate polishing and H2S removal.',
    intro:
      'Gold Recovery, Water Treatment, Solvent Recovery, Condensate & H2S removal are some of the major applications where a Granular Activated Carbon is used. Granular Activated Carbon (GAC) media and cartridges are an excellent choice for removing chlorine, bad tastes, odors, and several other contaminants from water.',
    highlights: [
      'IndoCarb GAC range of carbons has been manufactured from the highest quality selected grades of coconut shell under stringent controls.',
      'The particle size and pore structure are specifically designed to provide the best adsorption properties.',
      'GAC grades are available in different mesh sizes and adsorption levels, and pH adjusted or washed as tailor made per customer requirement.',
    ],
    commonUses: [
      'Water treatment',
      'Gold recovery',
      'Solvent recovery',
      'Condensate and H2S removal',
    ],
    sections: [
      {
        title: 'Applications',
        body:
          'Gold recovery, water treatment, solvent recovery, condensate polishing and H2S removal are some of the major applications where granular activated carbon is used.',
      },
      {
        title: 'Coconut shell GAC range',
        body:
          'IndoCarb GAC range of carbons has been manufactured from the highest quality selected grades of coconut shell under stringent controls to have the ultimate hardness, surface area and attrition resistance. Besides, the particle size and pore structure have been specifically designed to provide the best adsorption properties.',
      },
      {
        title: 'Certification and customization',
        body:
          'These are manufactured in ISO accredited facilities and are NSF 42 & NSF 61 certified for water treatment applications.',
        bullets: [
          'Different mesh sizes and adsorption levels',
          'pH adjusted or washed grades tailored per customer requirement',
          'Ultimate hardness, surface area and attrition resistance',
        ],
      },
    ],
    image:
      'https://images.unsplash.com/photo-1756729534562-ec0f8bcf252b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmF0ZWQlMjBjYXJib24lMjBncmFudWxlcyUyMGNoYXJjb2FsJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzU0NzU0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    slug: 'powder',
    name: 'Powder Activated Carbon',
    shortName: 'Powder',
    summary:
      'Virgin powdered activated carbon suitable for drinking water, food-grade applications, wastewater treatment and odor removal.',
    intro:
      'IndoCarb manufactures virgin powdered activated carbon to be ANSI/NSF Standard 42 & 61 classified suitable for drinking water and food-grade applications.',
    highlights: [
      'Different industries that benefit from virgin powder activated carbon include water treatment, wastewater treatment, odor removal, brewery and winery.',
      'PAC is commonly used in filter cartridges to filter chloramines and organic compounds, including pesticides and herbicides, from drinking water.',
      'Additional applications include pesticide removal, groundwater remediation, disinfection-by-product (DBP) removal and many more.',
    ],
    commonUses: [
      'Water treatment',
      'Wastewater treatment',
      'Odor removal',
      'Brewery and winery applications',
    ],
    sections: [
      {
        title: 'Drinking water and food-grade applications',
        body:
          'IndoCarb manufactures virgin powdered activated carbon to be ANSI/NSF Standard 42 & 61 classified suitable for drinking water and food-grade applications.',
      },
      {
        title: 'Industries served',
        body:
          'Some of the different industries that benefit from using virgin powder activated carbon include water treatment, wastewater treatment, odor removal, brewery and winery.',
      },
      {
        title: 'Additional applications',
        body:
          'PAC is commonly used in filter cartridges to filter chloramines and organic compounds, including pesticides and herbicides, from drinking water.',
        bullets: [
          'Pesticide removal',
          'Groundwater remediation',
          'Disinfection-by-product (DBP) removal',
        ],
      },
    ],
    image:
      '/images/products/powder-activated-carbon.png',
  },
  {
    slug: 'impregnated',
    name: 'Impregnated Activated Carbon',
    shortName: 'Impregnated',
    summary:
      'Impregnated activated carbon for cost-effective removal of certain impurities from gas streams and water systems.',
    intro:
      'Impregnation optimizes the existing properties of activated carbon, giving a synergism between the chemicals and the carbon.',
    highlights: [
      'Impregnation facilitates cost-effective removal of certain impurities from gas streams, which would be impossible otherwise.',
      'POU water filters use silver to counter bacterial growth on the surface of activated carbon.',
      'GAC impregnated with sulfur provides superior mercury removal characteristics when treating natural gas, air, hydrogen or other gas streams.',
    ],
    commonUses: [
      'Gas purification',
      'Civil and military gas protection',
      'Mercury removal',
      'Bacteriostatic drinking-water systems',
    ],
    sections: [
      {
        title: 'Optimized activated carbon',
        body:
          'Impregnation optimizes the existing properties of the activated carbon, giving a synergism between the chemicals and the carbon. This facilitates cost-effective removal of certain impurities from gas streams, which would be impossible otherwise.',
      },
      {
        title: 'Water and gas examples',
        body:
          'POU water filters use silver to counter bacterial growth on the surface of activated carbon. GAC impregnated with sulfur provides superior mercury removal characteristics when treating natural gas, air, hydrogen or other gas streams.',
      },
      {
        title: 'Common targets',
        body:
          'Because of its antimicrobial and bacteriostatic properties, silver-impregnated carbon is an effective adsorbent for purification in drinking water filters and other water systems. Carbon can also be specifically impregnated for removal of acid gases, ammonia and amines.',
        bullets: [
          'Mercury',
          'Acid gases',
          'Ammonia and amines',
          'Bacterial growth on carbon surfaces',
        ],
      },
    ],
    image:
      '/images/products/impregnated-activated-carbon.png',
  },
  {
    slug: 'catalytic',
    name: 'Catalytic Activated Carbon',
    shortName: 'Catalytic',
    summary:
      'Catalytic activated carbon for reduction of chloramines, hydrogen sulfides, hydrogen peroxides, THMs, TCE, PCE and taste and odor.',
    intro:
      'IndoCarb offers a wide range of high activity coconut shell based granular grades and acid washed grades that have enhanced catalytic carrier properties.',
    highlights: [
      'Designed for reduction of Chloramines, Hydrogen Sulfides, Hydrogen Peroxides, THMs, TCE, PCE, detergents, pesticides, Phenols, taste and odor.',
      'Catalytic carbon is created by altering the surface structure of activated carbon to enhance carbon’s natural ability to chemically change contaminants.',
      'CATCARB is surface modified to enhance the carbon capability for decomposing chloramine and hydrogen sulphide at a rapid pace.',
    ],
    commonUses: [
      'Chloramine reduction',
      'Hydrogen sulfide removal',
      'Taste and odor reduction',
      'Specialty water treatment',
    ],
    grades: ['CATCARB catalytic grades'],
    sections: [
      {
        title: 'Enhanced catalytic properties',
        body:
          'IndoCarb offers a wide range of high activity coconut shell based granular grades and acid washed grades that have enhanced catalytic carrier properties.',
      },
      {
        title: 'Chloramine removal',
        body:
          'Chloramines are disinfectants used to treat drinking water, formed when ammonia is added to chlorine. Chloramines cannot be removed by passing water through the same activated carbon filters used for chlorine removal because these filters are too small at their designed flow rates.',
      },
      {
        title: 'How CATCARB works',
        body:
          'CATCARB range of catalytic activated carbons has been developed especially for water treatment applications. CATCARB is surface modified to enhance the carbon capability significantly for decomposing components like chloramine and hydrogen sulphide in a rapid pace.',
        bullets: [
          'Highest quality selected grades of coconut shell',
          'Stringent controls for hardness, surface area and attrition resistance',
          'Particle size and pore structure designed for strong adsorption properties',
        ],
      },
    ],
    image:
      '/images/products/catalytic-activated-carbon.png',
  },
];

export const applications: ApplicationEntry[] = [
  {
    slug: 'water-treatment',
    name: 'Water Treatment',
    summary:
      'Activated carbon for drinking water, industrial and process water treatment, municipal water and wastewater applications.',
    intro:
      'Activated carbon is an efficient and cost-effective solution for removing a wide range of contaminants from industrial and municipal wastewater, contaminated ground and groundwater. IndoCarb offers solutions for water treatment including drinking water, industrial and process water treatment.',
    keyPoints: [
      'The water treatment product range includes GAC, PAC, impregnated, acid/water washed and speciality catalytic grade carbon.',
      'Activated carbon is mainly used for chlorine and organics removal in drinking water treatment applications.',
      'Coconut shell carbon is well suited for organic chemical adsorption, including volatile organic chemicals, while having higher chlorine reduction capabilities.',
    ],
    recommendedProducts: ['granular', 'powder', 'impregnated', 'catalytic'],
    sections: [
      {
        title: 'POU water filters',
        body:
          'Water filters, filter cartridges and carbon blocks are one of the most widely and effectively used water filtration technologies. IndoCarb utilizes state of the art manufacturing techniques and ultramodern equipment and testing facilities to produce carbon products with the ideal balance of adsorption and pore structure, low ash and impurities, high mechanical strength and consistent particle size distribution.',
        bullets: [
          'IndoCarb WT grade products comply with NSF 42 and Prop 65 certification standards.',
          'Specialized products include silver impregnated carbon for bacteriostatic applications.',
          'Catalytic carbons are available for chloramine, iron and hydrogen sulfide removal.',
        ],
      },
      {
        title: 'Municipal and industrial water',
        body:
          'IndoCarb WT carbon is used in point-of-entry applications to remove taste, odor and color in drinking water. In municipal water, removal of organics including VOCs, inorganics and toxins from rivers, lakes, reservoirs, surface water and ground water systems is essential.',
      },
      {
        title: 'Wastewater treatment',
        body:
          'Whether it is treatment of wastewater, effluent or contaminated ground water, IndoCarb activated carbon is the right choice for purification processes. Granular carbon filtration removes dissolved, non-biodegradable organics using fixed filter beds. Powder carbons are used by mixing with sludge for better process stability and improved settling characteristics.',
        bullets: [
          'Process effluent',
          'Swimming pools and aquariums',
          'Mercury removal',
          'Groundwater remediation',
          'Pesticide removal',
        ],
      },
    ],
    image:
      'https://images.unsplash.com/photo-1758738880344-373b29019b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRyaW5raW5nJTIwd2F0ZXIlMjBnbGFzcyUyMHBvdXJpbmd8ZW58MXx8fHwxNzc1NDc1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    slug: 'gold-recovery',
    name: 'Gold Recovery',
    summary:
      'Highly microporous coconut shell activated carbon with excellent attrition resistance for gold recovery applications.',
    intro:
      'IndoCarb offers highly microporous coconut shell based activated carbons with excellent attrition resistance for gold recovery application, manufactured with very low platelet content and zero dust.',
    keyPoints: [
      'GC range carbons are manufactured from the highest quality coconut shell under stringent controls for ultimate hardness.',
      'Particle size and pore structure are specifically designed for adsorption of metal and cyanide complexes from Carbon-in-pulp, Carbon-in-column or tank adsorbed systems.',
      'IndoCarb specializes in precious metal recovery carbon and services some of the world’s largest mining companies.',
    ],
    recommendedProducts: ['granular'],
    grades: ['GC E612 Gold Grade', 'GC E816 Gold Grade'],
    sections: [
      {
        title: 'Recovery systems',
        body:
          'GC range products are designed for adsorption of metal and cyanide complexes from Carbon-in-pulp, Carbon-in-column, or tank adsorbed systems.',
      },
      {
        title: 'Clean processing',
        body:
          'IndoCarb GC range products are processed through a vee-wire screen to keep platelets to the minimum and de-dusted to keep the carbon extra clean.',
      },
      {
        title: 'Operating advantages',
        body:
          'These carbons have superior adsorption kinetics with very high gold adsorption rates and loading capacities.',
        bullets: [
          'Superior hardness to minimize attrition loss and dust',
          'Higher gold adsorption capacities for maximum loading',
          'Excellent gold adsorption rates for high throughput',
        ],
      },
    ],
    image:
      '/images/applications/gold-recovery.png',
  },
  {
    slug: 'air-gas',
    name: 'Air & Gas',
    summary:
      'Activated carbon for indoor air quality, gas masks, filters, emissions and nuisance odor control.',
    intro:
      'Activated carbon plays an integral role in purifying indoor air quality and also outdoors with gas masks, filters and related applications. Air filtration applications require activated carbon grades featuring excellent hardness characteristics and high retentivity.',
    keyPoints: [
      'Coconut shell-based activated carbons with extreme hardness and large microporous structure are the carbon of choice for air and gas service.',
      'IndoCarb offers activated carbon products for emission regulations, environmental protection, controlling emissions and reducing harmful or nuisance odors.',
      'Impregnated carbons are used in gas masks to protect civilian and military environments against chemical warfare gases.',
    ],
    recommendedProducts: ['impregnated', 'granular'],
    sections: [
      {
        title: 'Protective equipment',
        body:
          'Respirators and gas masks containing IndoCarb VP granular activated carbon filters are used to provide protection against acid gases, organic vapors, ammonia, mercury vapor, formaldehyde and radioactive iodides.',
      },
      {
        title: 'Industrial and environmental filtration',
        body:
          'Our carbons are used in air filtration devices such as filters and adsorbers for Indoor Air Quality, Cabin Air Filtration and Emission/Odor Control applications. Other applications include mines, chemical facilities, nuclear power stations and manufacturing plants.',
      },
      {
        title: 'Named application areas',
        body:
          'Common use cases for this category include:',
        bullets: [
          'Cabin air filtration',
          'Protection equipment including gas masks',
          'Indoor air quality',
          'Treatment of flue gas',
          'Emission and odor control',
        ],
      },
    ],
    image:
      '/images/applications/air-and-gas.png',
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    summary:
      'Activated carbon for petroleum vapor recovery, H2S removal, condensate polishing and refinery boiler-feed water treatment.',
    intro:
      'IndoCarb offers industry-leading activated carbon products for a wide range of oil and gas industry applications. Activated carbon is used for recovery of valuable products like gasoline vapors, benzene and solvents at petroleum refineries and for removal of hydrogen sulphide gas during oil refining.',
    keyPoints: [
      'Water used as condensate boiler feed in refineries requires very high purification standards.',
      'O&G grade treated activated carbons remove contaminants, de-oil condensate and purify water flow to protect ion exchange resins and sensitive equipment.',
      'O&G grade carbon products are designed for the lowest silica leach and nil ash level in the industry.',
    ],
    recommendedProducts: ['granular', 'impregnated'],
    grades: ['Petro Grade'],
    sections: [
      {
        title: 'Refinery recovery and gas cleanup',
        body:
          'Activated carbon is used for recovery of economically valuable products like gasoline vapors, benzene and solvents at petroleum refineries. Activated carbon is also an effective adsorbent for removal of hydrogen sulphide gas during oil refining.',
      },
      {
        title: 'Condensate and boiler-feed water',
        body:
          'Water used as condensate boiler feed in refineries requires high purification standards. IndoCarb O&G grade treated activated carbons remove contaminants, de-oil condensate and purify water flow, protecting ion exchange resins and other sensitive equipment from damage and deterioration.',
      },
      {
        title: 'Operating advantages',
        body:
          'Silica is a common fouling agent in regular activated carbon products and can damage ion exchange resins, boiler tubes and turbine blades. IndoCarb O&G grade carbon products for boiler feed water treatment are designed to have the lowest silica leach and nil ash level in the industry.',
        bullets: [
          'Lowest level of silica leaching',
          'Low ash content and nil dust',
          'No pre-washing of filter beds required',
          'High hardness and attrition resistance',
        ],
      },
    ],
    image:
      'https://images.unsplash.com/photo-1614377493833-7f92e84773ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjByZWZpbmVyeSUyMHBpcGVzJTIwc3RlZWx8ZW58MXx8fHwxNzc1NDc1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    slug: 'catalytic-carbon',
    name: 'Catalytic Carbon',
    summary:
      'CATCARB catalytic activated carbon for chloramine and hydrogen sulphide decomposition in water treatment.',
    intro:
      'Many water utilities across the U.S. are transitioning to chloramine for disinfection as an alternative to chlorine in response to stricter U.S. Environmental Protection Agency regulations on disinfection byproducts.',
    keyPoints: [
      'Chloramine, a combination of chlorine and ammonia, is more stable and does not create DBPs.',
      'Removing chloramine at the point of use is more difficult than removing chlorine, and standard granular activated carbon or carbon block products have limited chloramine reduction capacity.',
      'CATCARB range catalytic activated carbons are developed especially for water treatment applications.',
    ],
    recommendedProducts: ['catalytic'],
    grades: ['CATCARB'],
    sections: [
      {
        title: 'Why utilities are changing',
        body:
          'Many water utilities across the U.S. are transitioning to chloramine for disinfection as an alternative to chlorine. This change is in response to stricter U.S. Environmental Protection Agency regulations on disinfection byproducts, which are created when chlorine reacts with organics in water.',
      },
      {
        title: 'Why catalytic carbon matters',
        body:
          'Chloramine is more stable than chlorine and removing chloramine at the point of use is more difficult than removing chlorine. Standard granular activated carbon or carbon block products have limited capacity for chloramine reduction.',
      },
      {
        title: 'How CATCARB works',
        body:
          'CATCARB is surface modified to enhance the carbon capability significantly for decomposing components like chloramine and hydrogen sulphide in a rapid pace. Besides, the particle size and pore structure have been specifically designed to provide the best adsorption properties.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5kdXN0cmlhbCUyMGZhY2lsaXR5fGVufDF8fHx8MTc3NTQ3NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    slug: 'other-applications',
    name: 'Other Applications',
    summary:
      'Activated carbon for solvent recovery, food and beverages, edible oil and other specialty applications.',
    intro:
      'Other applications include solvent recovery, food and beverages, edible oil and many more specialty purification uses.',
    keyPoints: [
      'Solvent recovery supports printing, dry cleaning, and paint applications.',
      'Food and beverage applications focus on taste and odor control, CO2 purification, and edible-oil decolorization.',
      'Granular, extruded, and food-grade powder carbons support different process requirements.',
    ],
    recommendedProducts: ['granular', 'powder', 'impregnated'],
    sections: [
      {
        title: 'Solvent recovery',
        body:
          'In many industries like printing, dry cleaning and paint, many types of solvents are vaporized in the course of production. Recovery of these solvents from exhaust air is a good practice to reduce cost and atmospheric pollution. Activated carbon adsorbs the solvent from air and subsequently desorbs by hot steam or inert gas so the condensate can be treated to recover solvent for reuse.',
      },
      {
        title: 'Food and beverages',
        body:
          'IndoCarb food grade activated carbon offers a solution for removal of undesired odor and taste of beverages including beer and edible oil. Activated carbons are offered for removal of residual disinfectants such as chlorines, chloramines and chlorinated by-products including THMs, as well as extraction and purification of CO2 generated during brewing.',
      },
      {
        title: 'Grades and outputs',
        body:
          'The efficiency of solvent recovery depends on pore structure. IndoCarb offers granular and extruded activated carbons with activity levels for specific solvents, good desorption characteristics, excellent hardness and a wide range of particle sizes. Food grade powder carbon is available in different specifications with iodine adsorption level, methylene blue value and molasses number tailor made for edible oil purification.',
        bullets: [
          'Solvent Recovery Grade',
          'Edible Oil Grade',
          'Food-grade powdered carbon',
        ],
      },
    ],
    image:
      'https://images.unsplash.com/photo-1554070211-e3953a3de374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

export const newsroomItems: NewsroomItem[] = [
  {
    slug: 'name-change-press-release',
    title: 'Name Change Press Release',
    type: 'press-release',
    summary:
      'Black Opal announced the completion of its transition from Indocarb AC LLC to Black Opal Carbons as part of a broader global branding effort.',
    detail: [
      'We are delighted to announce that the change of name and the transition process which we initiated and announced in 2019 is in completion stage. Our new name will be, Black Opal Carbons. This name change is a part of our exciting worldwide branding effort to integrate our North American brand and businesses in other parts of the world including manufacturing facilities in India.',
      "Black Opal, one of the world's highest quality, most enchanting and precious gemstones, better denotes our product portfolio and group. The goal of the name change is to align our corporate and product brand identities and is a part of our exciting worldwide branding effort to integrate our North American brand with our other group activities rest of the world. Along with the name change, we are adopting a new corporate identity, including a new logo and new visual identity. A new website is coming soon. While our company name is changing, all core elements of the organization will remain the same.",
      'So, what does this mean for our clients? You will see very little changes -',
      'Our products, factory, address, facilities, pricing and support procedures will remain unchanged.',
      'You will continue to work with the same people in our organization as you have in the past.',
      'This rebranding will not affect or delay any current or future orders of our products.',
      'But you will really see significant benefits in the following areas:',
      '• Increased resources with expanded production capacities.',
      '• Increased expertise with additional sales and customer service resources.',
      '• New offerings including specialty products.',
      'All of us want to personally say a big Thank You for your continued business, and we look forward to our continuing relationship. Our goal has always been – and remains – to help make you more successful.',
      'Please feel free to reach out to any of us with any and all questions you may have about these exciting changes.',
    ],
    bullets: [
      'Former name: Indocarb AC LLC',
      'Transition initiated in 2019',
      'Products, factory, address, facilities, pricing, and support procedures remain unchanged',
      'Expanded production capacities, added expertise, and specialty products',
    ],
  },
  {
    slug: 'catalytic-carbon-resource',
    title: 'Catalytic Carbon',
    type: 'resource',
    summary:
      'Technical notes on catalytic activated carbon performance, chloramine reduction, and specialty water-treatment use cases.',
  },
  {
    slug: 'gold-grade-carbon-resource',
    title: 'Gold Grade Carbon',
    type: 'resource',
    summary:
      'Grade context for CIP, CIL, CIC and tank-adsorbed precious-metal recovery systems where hardness and adsorption kinetics matter.',
  },
  {
    slug: 'powerpoint-presentation-resource',
    title: 'PowerPoint Presentation',
    type: 'resource',
    summary:
      'Company presentation material for technical review and sales discussions.',
    documentUrl: '/documents/newsroom/black-opal-powerpoint-presentation.pdf',
    documentLabel: 'Open presentation PDF',
  },
  {
    slug: 'water-treatment-resource',
    title: 'Water Treatment',
    type: 'resource',
    summary:
      'Water-treatment context for drinking water, process water, wastewater polishing, and contaminant-specific grade selection.',
  },
  {
    slug: 'pou-filter-carbon-resource',
    title: 'POU Filter Carbon',
    type: 'resource',
    summary:
      'Point-of-use filter guidance for balanced adsorption, low ash, high strength, and consistent particle-size distribution.',
  },
];

export const productMap = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<
  string,
  ProductEntry
>;

export const applicationMap = Object.fromEntries(
  applications.map((application) => [application.slug, application]),
) as Record<string, ApplicationEntry>;

export const newsroomMap = Object.fromEntries(newsroomItems.map((item) => [item.slug, item])) as Record<
  string,
  NewsroomItem
>;
