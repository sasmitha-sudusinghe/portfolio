# Sasmitha Sudusinghe — Portfolio

A single-page portfolio combining software work and photography, styled with a neon-blue tech theme. Built with plain HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — content and structure
- `style.css` — all styling (colors, type, layout are defined as CSS variables at the top of the file)
- `script.js` — live clock, typed tagline, particle-network canvas, scroll-reveal animations, mobile nav toggle, footer year
- `images/` — photography section photos (`photo1.jpg`–`photo6.jpg`)

## Theme
Dark navy/black background with glowing cyan, blue, and violet accents. Signature elements:
- Animated particle-network canvas behind the hero (glowing nodes connected by lines)
- Gradient-glow hero name that slowly shifts hue
- Faint animated grid backdrop + scanline overlay
- Neon glow on hover for nav links, project cards, and photo frames
- Scroll-triggered fade/slide-in reveals for each section
- Neon gradient scrollbar

All colors live in `:root` in `style.css` — change `--cyan`, `--blue`, `--violet`, or `--ink` there to retint.

## Before you publish — check these
- Hero tagline lines in `script.js` (the `lines` array) — update if your one-liners change
- Location in the hero meta bar (`Colombo, LK`) — update if it changes
- Work section: `.term-card` blocks — keep project names, descriptions, commit hash, stack, and links current
- Photography section: `.frame` blocks — swap in new photos under `images/`, update `alt` text and EXIF captions
- About section bio, stack list, gear list
- Contact section: email and social links

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
npx serve .
```

## Deploy to GitHub Pages
1. Create a new repo on GitHub and push these files (`index.html`, `style.css`, `script.js`, `images/`) to the root (or to a `docs/` folder).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)` (or `/docs`).
4. Save. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

```bash
git init
git add .
git commit -m "portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

## Deploy to Vercel
Easiest path — no config needed since this is static HTML:
1. Push the repo to GitHub (steps above).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (or "Static"). Leave build command empty, output directory as root.
4. Deploy. Vercel gives you a `*.vercel.app` URL immediately, and you can attach a custom domain later in project settings.

Or, with the Vercel CLI, from inside this folder:
```bash
npm i -g vercel
vercel
```

## Notes
- Dark theme by default; all colors live in `:root` in `style.css`.
- Respects `prefers-reduced-motion` (disables the typing animation, blinking cursor, particle-network motion, and scroll-reveal animation).
- Fully responsive down to mobile; nav links collapse into a slide-in menu below 720px, opened via the hamburger button.
