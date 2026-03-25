/* ================================================================
   INTRACAV DOCS — Interaction & Animation Engine
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initScrollProgress();
  initSidebarActive();
  initMobileMenu();
  initChatDemos();
  initSmoothAnchors();
  initMarquee();
  initThemeToggle();
});

/* ---------- Scroll Reveal (Intersection Observer) ---------- */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .stagger-children, .step').forEach((el) => {
    observer.observe(el);
  });
}

/* ---------- Scroll Progress Bar ---------- */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${Math.min(progress, 1)})`;
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- Sidebar Active State ---------- */
function initSidebarActive() {
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.sidebar-link').forEach((link) => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (href === path) {
      link.classList.add('active');
    }
  });

  // Header nav active
  document.querySelectorAll('.header-nav a').forEach((link) => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (path.startsWith(href) && href !== '') {
      link.classList.add('active');
    }
  });
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    btn.setAttribute('aria-expanded', sidebar.classList.contains('open'));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !btn.contains(e.target)) {
      sidebar.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- Chat Demo Animations ---------- */
function initChatDemos() {
  const demos = document.querySelectorAll('.chat-demo-animated');

  demos.forEach((demo) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateChat(demo);
            observer.unobserve(demo);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(demo);
  });
}

function animateChat(container) {
  const messages = container.querySelectorAll('.chat-msg');
  const extras = container.querySelectorAll('.chat-extra');

  messages.forEach((msg, i) => {
    msg.style.opacity = '0';
    msg.style.transform = 'translateY(10px)';

    setTimeout(() => {
      msg.style.transition = 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      msg.style.opacity = '1';
      msg.style.transform = 'translateY(0)';
    }, 400 + i * 800);
  });

  extras.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';

    setTimeout(() => {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400 + messages.length * 800 + i * 300);
  });
}

/* ---------- Marquee Duplication ---------- */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;

  // Duplicate children so the loop is seamless
  const items = Array.from(track.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
}

/* ---------- Theme Toggle ---------- */
function initThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  const icon = btn.querySelector('.theme-icon');

  function getEffectiveTheme() {
    const saved = document.documentElement.getAttribute('data-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateIcon() {
    const theme = getEffectiveTheme();
    // Moon for light mode (click to go dark), sun for dark mode (click to go light)
    icon.textContent = theme === 'dark' ? '\u2600' : '\u263D';
  }

  btn.addEventListener('click', () => {
    const current = getEffectiveTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateIcon);

  updateIcon();
}

/* ---------- Smooth Anchor Scrolling ---------- */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', link.getAttribute('href'));
      }
    });
  });
}
