// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Live clock in hero meta line
const clockEl = document.getElementById('clock');
function tickClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${hh}:${mm}:${ss}`;
}
tickClock();
setInterval(tickClock, 1000);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Typed line in hero — replace the string below with your own one-liner
const lines = [
  'engineer by day, photographer by golden hour.',
  'building things · framing things.',
  'ships code. develops film.'
];
const typedEl = document.getElementById('typedLine');

if (reduceMotion) {
  typedEl.textContent = lines[0];
} else {
  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = lines[lineIndex];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    setTimeout(typeLoop, deleting ? 30 : 55);
  }
  typeLoop();
}

// ============================================
// Nav — scrolled state + mobile toggle
// ============================================
const navEl = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navEl.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('is-open');
      navLinks.classList.remove('is-open');
    });
  });
}

// ============================================
// Scroll-reveal for sections / cards
// ============================================
const revealTargets = document.querySelectorAll(
  '.section-head, .term-card, .frame, .about-bio, .about-meta, .contact-body'
);
revealTargets.forEach(el => el.classList.add('reveal'));

if (reduceMotion) {
  revealTargets.forEach(el => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(el => io.observe(el));
}

// ============================================
// Neon circuit / particle network — hero canvas
// ============================================
(function initNetwork() {
  const canvas = document.getElementById('netCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;

  let width, height, dpr;
  let nodes = [];
  let animId = null;

  const NODE_COLOR = 'rgba(120, 190, 255, 0.85)';
  const LINE_COLOR = '0, 229, 255';

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(24, Math.min(70, Math.floor((width * height) / 22000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    }

    const maxDist = 150;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.35;
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      ctx.beginPath();
      ctx.fillStyle = NODE_COLOR;
      ctx.shadowColor = 'rgba(0, 229, 255, 0.9)';
      ctx.shadowBlur = 6;
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    animId = requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize);

  if (reduceMotion) {
    // draw a single static frame, no animation loop
    step();
    cancelAnimationFrame(animId);
  } else {
    step();
  }
})();
