# HOOD REVENGE storefront

Run commands from this folder (hood-revenge-store-1), not its parent.

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. After dependency or PostCSS changes, restart the development server.

```sh
npm run typecheck
npm run build
npm start
```

Tailwind v4 uses `@tailwindcss/postcss` in `postcss.config.mjs` and `@import "tailwindcss"` in the global CSS. No Tailwind CLI or `init -p` command is needed. Development and production scripts use Next.js’s supported Webpack compiler because Turbopack’s CSS worker could not start in the verification environment.

## Features
Responsive storefront, searchable/filterable/sortable catalogue, static product pages, size selection, persistent local cart, quantity controls, custom 404 and explicit checkout preview.

## Before accepting orders
All products, illustrations and ZAR prices are samples. Replace `src/lib/catalog.ts` with approved product data and actual photos. Configure stock, shipping, tax and legal policies. Implement server-side checkout with the selected payment provider and verified webhooks. Never trust cart prices from the browser. No payment credentials or customer data are collected by this preview.

## Deployment
Use a host that supports Next.js. Set the project root to `hood-revenge-store-1`, install with `npm ci`, and build with `npm run build`. For a Node.js server, run `npm start` after the build. VS Code Live Server cannot serve these source files. A hosting account/site must be selected before publishing.
