/* ==========================================================================
   LUMEN DOCS — interactions. Calm, reduced-motion aware, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initSearch();
    initToc();
    initTabs();
    initCopyButtons();
    initFeedback();
    initLuiExamples();
    initReveal();
    initKbdLabels();
  });

  /* ---------- Theme ---------- */
  function initThemeToggle() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const root = document.documentElement;
    const effective = () => root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    btn.addEventListener('click', () => {
      const next = effective() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store.set('theme', next);
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    if (!btn || !sidebar) return;
    const set = (open) => {
      sidebar.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', (e) => { e.stopPropagation(); set(!sidebar.classList.contains('open')); });
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) set(false);
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
    const active = sidebar.querySelector('.sidebar-link.active');
    if (active) active.scrollIntoView({ block: 'center' });
  }

  /* ---------- Search (Pagefind, loaded on first open) ---------- */
  let pagefindLoading = null;
  function loadPagefind() {
    if (window.PagefindUI) return Promise.resolve();
    if (pagefindLoading) return pagefindLoading;
    pagefindLoading = new Promise((resolve, reject) => {
      const css = document.createElement('link');
      css.rel = 'stylesheet'; css.href = '/pagefind/pagefind-ui.css';
      document.head.appendChild(css);
      const s = document.createElement('script');
      s.src = '/pagefind/pagefind-ui.js';
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
    return pagefindLoading;
  }
  function mountSearch(el, query) {
    return loadPagefind().then(() => {
      if (!el.dataset.mounted) {
        new window.PagefindUI({ element: el, showSubResults: true, showImages: false, autofocus: true, resetStyles: false });
        el.dataset.mounted = '1';
      }
      const input = el.querySelector('input');
      if (input) {
        if (query) { input.value = query; input.dispatchEvent(new Event('input', { bubbles: true })); }
        input.focus();
      }
    }).catch(() => {
      el.innerHTML = '<p style="padding:12px;color:var(--fg-muted)">Search is available on the published site. ' +
        'Locally, run <code>hugo && npx pagefind --site public</code>.</p>';
    });
  }
  function initSearch() {
    const modal = document.getElementById('search-modal');
    const pageUi = document.getElementById('search-page-ui');
    if (pageUi) {
      const q = new URLSearchParams(location.search).get('q');
      mountSearch(pageUi, q);
    }
    if (!modal) return;
    const ui = document.getElementById('search-ui');
    let lastFocus = null;
    const open = () => {
      if (pageUi) { const i = pageUi.querySelector('input'); if (i) i.focus(); return; }
      lastFocus = document.activeElement;
      modal.hidden = false; modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      mountSearch(ui);
    };
    const close = () => {
      modal.classList.remove('open'); modal.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };
    document.querySelectorAll('[data-search-open]').forEach((b) => b.addEventListener('click', open));
    modal.querySelectorAll('[data-search-close]').forEach((b) => b.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === 'k') { e.preventDefault(); modal.classList.contains('open') ? close() : open(); }
      else if (k === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); open(); }
      else if (k === 'escape' && modal.classList.contains('open')) close();
    });
  }
  function initKbdLabels() {
    if (isMac) return;
    document.querySelectorAll('[data-kbd-mod]').forEach((k) => { k.textContent = 'Ctrl K'; });
  }

  /* ---------- On this page: scrollspy ---------- */
  function initToc() {
    const links = Array.from(document.querySelectorAll('.toc nav a'));
    if (!links.length) return;
    const map = new Map();
    links.forEach((a) => {
      const id = decodeURIComponent(a.getAttribute('href').slice(1));
      const h = document.getElementById(id);
      if (h) map.set(h, a);
    });
    const headings = Array.from(map.keys());
    const update = () => {
      const y = window.scrollY + 120;
      let current = headings[0];
      for (const h of headings) { if (h.offsetTop <= y) current = h; }
      links.forEach((l) => l.classList.remove('active'));
      if (current) map.get(current).classList.add('active');
    };
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Tabs: one wash that travels ---------- */
  function initTabs() {
    document.querySelectorAll('.tabs').forEach((tabs) => {
      const nav = tabs.querySelector(':scope > .tabs-nav');
      const btns = Array.from(nav.querySelectorAll('.tab-btn'));
      const panels = tabs.querySelectorAll(':scope > .tab-panel');
      const ind = document.createElement('span');
      ind.className = 'tab-indicator'; nav.prepend(ind);
      const place = (btn) => {
        ind.style.width = btn.offsetWidth + 'px';
        ind.style.transform = `translateX(${btn.offsetLeft - 4}px)`;
        ind.style.left = '4px';
      };
      const select = (btn, focus) => {
        btns.forEach((b) => { const on = b === btn; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; });
        panels.forEach((p) => p.classList.toggle('active', p.dataset.tabIndex === btn.dataset.tabIndex));
        place(btn); if (focus) btn.focus();
      };
      btns.forEach((b, i) => {
        b.addEventListener('click', () => select(b));
        b.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') select(btns[(i + 1) % btns.length], true);
          if (e.key === 'ArrowLeft') select(btns[(i - 1 + btns.length) % btns.length], true);
        });
      });
      const first = btns.find((b) => b.getAttribute('aria-selected') === 'true') || btns[0];
      if (first) requestAnimationFrame(() => place(first));
      window.addEventListener('resize', () => {
        const cur = btns.find((b) => b.getAttribute('aria-selected') === 'true');
        if (cur) place(cur);
      });
    });
  }

  /* ---------- Copy buttons on code ---------- */
  function initCopyButtons() {
    document.querySelectorAll('.prose .highlight, .prose > pre').forEach((block) => {
      const pre = block.tagName === 'PRE' ? block : block.querySelector('pre');
      if (!pre) return;
      const host = block.tagName === 'PRE' ? (() => {
        const w = document.createElement('div'); w.className = 'highlight';
        pre.parentNode.insertBefore(w, pre); w.appendChild(pre); return w;
      })() : block;
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'copy-btn'; btn.textContent = 'Copy';
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(pre.innerText.replace(/\n$/, '')).then(() => {
          btn.textContent = 'Copied'; setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
        });
      });
      host.appendChild(btn);
    });
  }

  /* ---------- Was this helpful? (stored locally; no tracking) ---------- */
  function initFeedback() {
    document.querySelectorAll('[data-feedback]').forEach((box) => {
      const key = 'fb:' + location.pathname;
      if (store.get(key)) box.classList.add('done');
      box.querySelectorAll('[data-vote]').forEach((b) => b.addEventListener('click', () => {
        b.setAttribute('aria-pressed', 'true');
        store.set(key, b.dataset.vote);
        box.classList.add('done');
      }));
    });
  }

  /* ---------- Lumen UI example: Preview / What Lumen wrote ---------- */
  function initLuiExamples() {
    document.querySelectorAll('.lui-example').forEach((ex) => {
      const btns = ex.querySelectorAll('.seg button');
      btns.forEach((b) => b.addEventListener('click', () => {
        btns.forEach((x) => x.setAttribute('aria-selected', String(x === b)));
        ex.classList.toggle('show-code', b.dataset.view === 'code');
      }));
    });
  }

  /* ---------- Reveal once on scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('visible')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }
})();
