# nikoemme.dev — Personal website

Personal site of [Niko (`@nikomatt69`)](https://github.com/nikomatt69).
Built with **Astro + Tailwind** using the same design system as
[`nikcli`](https://github.com/nikomatt69/nikcli) (terminal-native,
calm, light/dark, accessible). Deployed on **Cloudflare Pages**.

## Stack

- [Astro 5](https://astro.build) with [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
  adapter (`output: "server"`, all current pages marked `prerender = true` so they
  ship as static files at the edge — Worker stays warm for future API routes)
- [Tailwind CSS](https://tailwindcss.com) with the `nikcli` terminal design tokens
- Variable fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
  + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `@fontsource-variable`
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Cloudflare Pages](https://pages.cloudflare.com/) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

## Local development

```bash
npm install
npm run dev
```

The site runs on `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare

Configured for **Cloudflare Pages** via the Astro Cloudflare adapter.

```bash
# one-time
npx wrangler login

# build + deploy
npm run deploy
```

Or, hook the GitHub repo into the Cloudflare dashboard:

1. **Pages** → *Create a project* → *Connect to Git*
2. Pick this repo, branch `main`
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Compatibility flags: `nodejs_compat`

The adapter emits:

- `dist/index.html` (and any other prerendered route) → served straight from
  the edge cache, **zero Worker invocations**
- `dist/_worker.js/` → Cloudflare Worker bundle, used only for non-prerendered
  routes / API endpoints you may add later
- `dist/_routes.json` → routing manifest that excludes static assets from the
  Worker
- `dist/_headers` → security + immutable cache headers

To use Cloudflare bindings (KV, D1, R2, AI…), declare them in `wrangler.toml`
and they will be available in dev (via `platformProxy`) and at runtime through
`Astro.locals.runtime.env`.

## Project structure

```
src/
  components/   Navbar, Hero, About, Projects, Stack, Contact, Footer
  layouts/      Layout.astro
  pages/        index.astro
  styles/       global.css   ← terminal design tokens (light/dark)
public/         favicon.svg, robots.txt
```

## License

MIT © Niko
