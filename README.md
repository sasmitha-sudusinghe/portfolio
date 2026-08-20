# Portfolio

A single-page portfolio combining software work and photography, built with plain HTML/CSS/JS (no build step, no dependencies).

## Files
- `index.html` — content and structure
- `style.css` — all styling (colors, type, layout are defined as CSS variables at the top of the file)
- `script.js` — live clock, typed tagline, footer year

## Before you publish — replace these placeholders
- Name "Alex Rivera" (appears in `<title>`, hero, footer) — find/replace across `index.html`
- Hero tagline lines in `script.js` (the `lines` array)
- Location in the hero meta bar (`Colombo, LK`)
- Work section: 4 `.term-card` blocks — project names, descriptions, commit hash, stack, links
- Photography section: 6 `.frame` blocks currently show colored placeholder gradients. Replace each `<div class="frame-img"></div>` with `<img src="your-photo.jpg" alt="...">` and update the `alt` text and EXIF caption
- About section bio, stack list, gear list
- Contact section: email and social links

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
npx serve .
```

## Deploy to GitHub Pages
1. Create a new repo on GitHub and push these three files (`index.html`, `style.css`, `script.js`) to the root (or to a `docs/` folder).
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
- Dark theme by default; all colors live in `:root` in `style.css` if you want to retint.
- Respects `prefers-reduced-motion` (disables the typing animation and blinking cursor).
- Fully responsive down to mobile; nav links collapse on narrow screens (add a mobile menu if you want them accessible there — currently just hidden below 720px).
