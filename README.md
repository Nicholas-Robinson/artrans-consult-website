# ARTrans Consult — Astro migration

This repository has been migrated from a collection of static HTML files into an idiomatic Astro project.

Key structure now:

- public/           — static assets (css, js, images)
- src/pages/        — site routes (index.astro, about.astro, contact.astro, etc.)
- src/components/   — Header, Footer, PageHead
- src/layouts/      — BaseLayout.astro
- scripts/cleanup.sh — moves any leftover legacy assets into public/ and removes legacy top-level HTML files

Next steps to finalize locally:

1. Run the cleanup script to remove leftover legacy files and move any remaining assets into public/: 
   chmod +x scripts/cleanup.sh && ./scripts/cleanup.sh

2. Install dependencies and run the dev server:
   npm install
   npm run dev

3. Build for production:
   npm run build

Notes:
- The project currently uses a CDN for Font Awesome. If you prefer a fully offline/local build, copy font assets into public/ and update src/components/PageHead.astro.
- Once the cleanup script is run and you confirm everything works, I can proceed to extract shared UI into more components and add SEO / meta for each page.

This is the profile website for ARTrans Consult
