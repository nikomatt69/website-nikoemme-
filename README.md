# nikoemme.dev — Personal website

Personal site of [Niko (`@nikomatt69`)](https://github.com/nikomatt69).
Built with **Astro + Tailwind** using the same design system as
[`nikcli`](https://github.com/nikomatt69/nikcli) (terminal-native,
calm, light/dark, accessible). Deployed on **Cloudflare Pages**.

## Stack

- [Astro 5](https://astro.build) — `output: server` + Cloudflare adapter
- [Tailwind CSS](https://tailwindcss.com) with the `nikcli` terminal color tokens
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Framer Motion](https://www.framer.com/motion/) for subtle entrance animations
- [Cloudflare Pages](https://pages.cloudflare.com/) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

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

The project ships with a `wrangler.toml` configured for **Cloudflare Pages**.

```bash
# one-time login
npx wrangler login

# deploy the production build
npm run build
npm run deploy
```

Or, plug the GitHub repo into the Cloudflare dashboard:

1. **Pages** → *Create a project* → *Connect to Git*
2. Pick this repo, branch `main`
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Compatibility flags: `nodejs_compat`

Cloudflare will redeploy on every push.

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
