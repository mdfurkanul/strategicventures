# Strategic Ventures — Website

Bilingual (Swedish/English) website built with Astro + Tailwind CSS v4, deployed on Cloudflare Pages.

## Stack
- **Astro 7** (static output — 31 prerendered pages)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- `@astrojs/sitemap` for sitemap generation
- Brand fonts: Fraunces (serif) + Inter (sans)

## Brand colours
Defined in `src/styles/global.css`:
- Navy `#2A3A8F` — trust
- Sky `#34B5E5` — connection
- Growth `#6BBE44` — innovation

## Project structure
```
src/
├── components/      Reusable UI (Header, Footer, Hero, ServiceCard, …)
├── layouts/         BaseLayout + ServiceDetail
├── pages/           Swedish routes at root, English routes under /en/
│   └── en/
├── data/
│   ├── site.ts      Company info, contact, founder (← EDIT HERE)
│   ├── i18n.ts      All UI strings & page content for sv + en
│   └── services.ts  7 service pillars with sub-services
└── styles/global.css
```

## Development
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Before going live — TODOs
Open `src/data/site.ts` and replace the placeholders:
- `url` (also update `astro.config.mjs` and `public/robots.txt`)
- `contact.email`, `contact.phone`, `contact.address`, `contact.linkedin`
- `contact.formEndpoint` (after deploying the worker — see below)
- `founder.name`, `founder.role`, `founder.bio` (and add a photo at `public/founder.jpg`)

Also update `ALLOWED_ORIGIN` in `worker/contact.js`.

## Cloudflare Pages deploy
1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Pick the repo, set:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Environment variables:** `NODE_VERSION = 20`
4. **Save and Deploy.** Add your custom domain under **Custom domains**.
5. After deploy, submit `https://yourdomain.com/sitemap-index.xml` to Google Search Console.

## Contact form (Cloudflare Worker)
The contact form posts JSON to a tiny Cloudflare Worker that forwards to your email via MailChannels (free).

```bash
cd worker
npm i -g wrangler        # if not already
wrangler login
wrangler deploy
wrangler secret put CONTACT_TO_EMAIL       # e.g. info@yourdomain.com
wrangler secret put CONTACT_FROM_EMAIL     # must be an address on your Cloudflare domain
```

Paste the resulting worker URL into `src/data/site.ts → contact.formEndpoint`.

> Note: MailChannels free tier requires the `CONTACT_FROM_EMAIL` domain to be on Cloudflare (DNS-managed). If you use a different provider, swap the mail logic in `worker/contact.js` for Resend, Postmark, or AWS SES.

## Editing content
All text lives in `src/data/` — there's no CMS. Update `i18n.ts` for general copy, `services.ts` for service descriptions, `site.ts` for company/contact details. The build picks up changes automatically.

## SEO checklist
- Per-page `<title>` and `<meta description>` via the `SEO.astro` component ✓
- `hreflang` alternates (sv-SE / en-GB / x-default) on every page ✓
- JSON-LD: `Organization`/`ProfessionalService` (global) + `Service` (detail pages) + `BreadcrumbList` ✓
- Auto `sitemap-index.xml` ✓
- `robots.txt` ✓
- Semantic HTML, one `<h1>` per page ✓
- Replace `/og-image.svg` with a 1200×630 JPG/PNG for best social compatibility.

## Analytics (optional)
To enable Cloudflare Web Analytics (free, privacy-friendly, no cookies):
1. Cloudflare dashboard → your domain → **Analytics & Logs** → **Web Analytics** → enable.
2. Paste the beacon snippet into `BaseLayout.astro` before `</body>`.
