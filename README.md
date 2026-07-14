# Black Opal Carbons US

This repository is the US website copy of the Black Opal Carbons Next.js/Sanity site.

## Running Locally

```bash
npm install
npm run dev
```

The application defaults to the US profile when no local env file is present:

```env
NEXT_PUBLIC_SITE_ID=black-opal-us
NEXT_PUBLIC_SITE_URL=https://www.blackopalcarbons.com
NEXT_PUBLIC_SITE_NAME="Black Opal Carbons"
```

Use `.env.example` or `.env.us.example` as the starting point for local or hosting-provider environment variables.

## US Deployment

This repo is intended to deploy as a separate Vercel project for the US domain.

- Site ID: `black-opal-us`
- Canonical production URL: `https://www.blackopalcarbons.com`
- Embedded Studio URL: `https://www.blackopalcarbons.com/studio`
- Optional Sanity Studio fallback hostname: `black-opal-us-cms`

The deployment renders native `robots.txt`, `sitemap.xml`, canonical metadata, Open Graph tags, JSON-LD, and crawlable HTML for product, application, newsroom, and core pages.

## Sanity CMS

The site can load homepage, about page, site settings, product, application, production, and newsroom entries from Sanity. If Sanity env vars are not set, it uses checked-in static fallback content from `src/app/content/siteContent.ts`.

US-specific Sanity documents use:

- `homePage-black-opal-us`
- `siteSettings-black-opal-us`
- `aboutPage-black-opal-us`

Shared content remains shared by document type:

- Products
- Applications
- Production page
- Newsroom entries
- Shared page copy

Set these environment variables to enable CMS content and visual preview:

```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_SITE_ID=black-opal-us
SANITY_STUDIO_PREVIEW_ORIGIN=https://www.blackopalcarbons.com
SANITY_STUDIO_HOSTNAME=black-opal-us-cms
SANITY_API_READ_TOKEN=server_side_viewer_token
SANITY_API_WRITE_TOKEN=server_side_write_token_for_cms_push
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-15
NEXT_PUBLIC_SANITY_STUDIO_URL=https://www.blackopalcarbons.com/studio
SANITY_REVALIDATE_SECRET=shared_webhook_secret
```

`SANITY_API_READ_TOKEN` is server-side only. Do not expose it as a `NEXT_PUBLIC_*` variable.

Useful CMS scripts:

```bash
npm run cms:login
npm run cms:dev
npm run cms:seed
npm run cms:import
npm run cms:migrate:homepages
npm run cms:pull
npm run cms:push
npm run cms:push -- --apply
```

`cms:import` uses `--replace`, so treat it as a reset tool. For normal Git snapshots, use `cms:pull`, edit `sanity/snapshots/production.ndjson`, run `cms:push` as a dry run, then run `cms:push -- --apply` only after the diff looks right.

## Search Console

For production indexing, add a Google Search Console Domain property for `blackopalcarbons.com`, verify via DNS TXT, then submit:

```text
https://www.blackopalcarbons.com/sitemap.xml
```
