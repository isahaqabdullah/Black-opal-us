'use client';

import Link from 'next/link';
import { useSiteContent } from '../content/SiteContentProvider';
import { useHomePageDataAttribute } from '../cms/visualEditingAttributes';

export function Hero() {
  const { homePage } = useSiteContent();
  const heroLogoImage = homePage.heroLogoImage;
  const heroLogoAlt = homePage.heroLogoAlt;
  const heroLogoCaption = '';
  const heroTitle = homePage.heroTitle;
  const homePageDocumentId = homePage._id;
  const homePageDataAttribute = useHomePageDataAttribute(homePageDocumentId);

  return (
    <section className="premium-hero-section relative overflow-hidden border-b border-[#c9a24d]/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="premium-flow-lines absolute inset-x-[-10%] top-[10%] bottom-[-12%]" />
        <div className="absolute left-[10%] top-[8%] h-48 w-48 rounded-full bg-[#c9a24d]/10 blur-3xl" />
        <div className="absolute right-[5%] top-[18%] h-64 w-64 rounded-full bg-[#8b6725]/14 blur-3xl" />
      </div>

      <div className="premium-shell premium-hero-shell">
        <div className="premium-brand-title premium-reveal">
          <span className={`premium-brand-logo-frame${heroLogoCaption ? ' premium-brand-logo-frame-stacked' : ''}`}>
            <img
              src={heroLogoImage}
              alt={heroLogoAlt}
              className="premium-brand-logo"
            />
            {heroLogoCaption ? (
              <span className="premium-brand-logo-caption" aria-hidden="true">
                {heroLogoCaption}
                <span className="premium-brand-logo-divider" />
              </span>
            ) : null}
          </span>
        </div>
        <div className="premium-split-grid premium-hero-grid">
          <div data-sanity-edit-target>
            <span
              data-sanity={homePageDataAttribute('heroKicker')}
              className="premium-kicker premium-reveal text-[11px] tracking-[0.24em] uppercase mb-5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              {homePage.heroKicker}
            </span>
            <h1
              data-sanity={homePageDataAttribute('heroTitle')}
              className="premium-heading premium-heading-elevated premium-hero-heading premium-reveal premium-reveal-delay-1"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {heroTitle}
            </h1>
            <p
              data-sanity={homePageDataAttribute('heroDescription')}
              className="premium-copy premium-hero-copy premium-reveal premium-reveal-delay-2 mb-6 md:mb-7"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              {homePage.heroDescription}
            </p>
            <div className="premium-reveal premium-reveal-delay-3 flex flex-wrap gap-3">
              <Link
                href={homePage.heroPrimaryCtaPath}
                className="premium-primary-btn text-[14px] px-7 py-3 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {homePage.heroPrimaryCtaLabel}
              </Link>
              <Link
                href={homePage.heroSecondaryCtaPath}
                className="premium-secondary-btn text-[14px] px-7 py-3 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {homePage.heroSecondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="premium-hero-media relative w-full">
            <div className="pointer-events-none absolute inset-x-[12%] bottom-[-7%] h-24 rounded-full bg-[#c9a24d]/12 blur-3xl" />
            <div className="premium-image-frame premium-reveal premium-reveal-delay-1">
              <img
                data-sanity={homePageDataAttribute('heroImageUrl')}
                src={homePage.heroImageUrl}
                alt={homePage.heroImageAlt}
                width={1920}
                height={1523}
                fetchPriority="high"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
