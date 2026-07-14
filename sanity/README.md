# Sanity CMS Setup

This folder contains the schema shape and seed data expected by the US website.

The website reads published Sanity content from these document types:

- `homePage`
- `siteSettings`
- `pageCopy`
- `aboutPage`
- `productionPage`
- `product`
- `application`
- `newsroomItem`

US-specific documents:

- `homePage-black-opal-us`
- `siteSettings-black-opal-us`
- `aboutPage-black-opal-us`

Shared content:

- Page framing copy
- Production page
- Products
- Applications
- Newsroom entries

Contact and footer identity are owned by code/environment config, not Sanity.

## 1. Log In And Create A Sanity Project

```bash
npm run cms:login
```

Then create a project in Sanity and copy its project ID. The repo already includes `sanity.config.ts`, `sanity.cli.ts`, and these schema types.

## 2. Configure Env Vars

Use `.env.example` as the starting point for local development and production deployment.

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

Leave `NEXT_PUBLIC_SANITY_PROJECT_ID` blank to use the checked-in static content fallback.

`SANITY_API_READ_TOKEN` is used by draft preview. `SANITY_API_WRITE_TOKEN` is used by `cms:push` and migration scripts. Keep both server-side.

## 3. Run The Studio

```bash
npm run cms:dev
```

Studio runs at `http://localhost:3333` by default.

## 4. Use The Visual Editor

Run the website and embedded Studio on the same origin:

```bash
npm run dev
```

Open Studio at `/studio`, choose `Visual Editor`, and edit homepage metrics and section copy, page framing copy, about, production, product, application, and newsroom entries from the preview.

## 5. Seed Or Sync Content

Generate the import file:

```bash
npm run cms:seed
```

Import it into the production dataset:

```bash
npm run cms:import
```

`cms:import` uses `--replace`, so it can overwrite manual edits in Sanity. Prefer these scripts for ongoing Git snapshots:

```bash
npm run cms:pull
npm run cms:push
npm run cms:push -- --apply
```

`cms:pull` writes `sanity/snapshots/production.ndjson` with `_rev` values. `cms:push` dry-runs by default and only applies updates when the remote `_rev` still matches the pulled snapshot.

## 6. Add CORS Origins In Sanity

In the Sanity project settings, add allowed CORS origins for:

- `https://www.blackopalcarbons.com`
- `https://black-opal-us-cms.sanity.studio`
- `http://localhost:3000`
- `http://127.0.0.1:3000`

Published content is fetched server-side by Next.js. Draft preview content is fetched server-side through draft mode using `SANITY_API_READ_TOKEN`, and Visual Editing runs only while draft mode is enabled.
