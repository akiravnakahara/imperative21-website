# Imperative 21 Website

## Project Overview
Legacy archive site for Imperative 21, a closed non-profit network preserved for historical purposes.
Built with Next.js (App Router), TypeScript, and Tailwind CSS.
Statically exported and deployed to Netlify.

## Pages
- `/` — Home: mission/purpose overview
- `/about` — About: organization background
- `/projects` — Projects: featured work and initiatives
- `/imperatives` — Imperatives: guiding principles

## Commands
- `npm run dev` — start dev server
- `npm run build` — build static export to `out/`

## Design
- Clean, modern aesthetic
- Artwork from projects used as design motifs
- Content is rewritten (not migrated from Squarespace)

## Architecture
- All site copy lives in `app/lib/content.ts`
- Static export (`output: 'export'` in next.config.ts)
- Netlify: build command `npm run build`, publish directory `out/`

## Domain
- imperative21.co
- Registered via Tucows/OpenSRS (through Squarespace)
- DNS nameservers: Squarespace DNS (needs updating to Netlify when ready)
- Expires: 2026-09-18
