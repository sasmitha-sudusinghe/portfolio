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
