/* ============================================================
   AFRICAN CHARGING ALLIANCE · MAIN JS
   Structural interactions ported from kevinhawkinsdesign.com
   ============================================================ */
(function () {
  'use strict';

  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress bar ── */
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  var header = document.querySelector('header.site-header');

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', y > 30);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Cursor glow (desktop only) ── */
  if (fine && !reduce) {
    var glow = document.createElement('div');
    glow.id = 'afca-cursor-glow';
    document.body.appendChild(glow);
    var mx = window.innerWidth / 2, my = window.innerHeight / 2, gx = mx, gy = my;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    (function loop() {
      gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
      glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
      requestAnimationFrame(loop);
    })();
  }

  /* ── Mobile nav toggle ── */
  var toggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('nav.main-nav');
  if (toggle && mainNav) {
    toggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      var open = mainNav.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mainNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) mainNav.classList.remove('open');
    });
  }

  /* ── Magnetic buttons ── */
  if (fine && !reduce) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.22;
        var y = (e.clientY - r.top - r.height / 2) * 0.22;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px) translateY(-2px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ── Card 3D tilt + gradient spotlight ── */
  if (fine && !reduce) {
    document.querySelectorAll('.card, .stat, .member-logo').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = ((e.clientX - r.left) / r.width) * 100;
        var py = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty('--mx', px + '%');
        card.style.setProperty('--my', py + '%');
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(800px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 4) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ── Scroll reveal ── */
  var revealTargets = document.querySelectorAll('.card, .stat, .member-logo, section h2, .section-lead, .hero h1, .hero p');
  revealTargets.forEach(function (el, i) {
    el.setAttribute('data-reveal', '');
    el.setAttribute('data-reveal-delay', String((i % 3) + 1));
  });
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window && !reduce) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Animated stat counters ── */
  document.querySelectorAll('.stat .number[data-count]').forEach(function (el) {
    var o = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var target = +el.dataset.count;
        var prefix = el.dataset.prefix || '';
        var suffix = el.dataset.suffix || '';
        if (reduce) { el.textContent = prefix + target + suffix; o.unobserve(e.target); return; }
        var start = 0, step = target / 50;
        var tick = setInterval(function () {
          start = Math.min(start + step, target);
          el.textContent = prefix + Math.round(start) + suffix;
          if (start >= target) clearInterval(tick);
        }, 28);
        o.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    o.observe(el);
  });

  /* ── Contact form (static demo submit) ── */
  var form = document.querySelector('form.contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) status.textContent = 'Thanks — this is a placeholder form. We’ll follow up once it’s wired to a real inbox.';
      form.reset();
    });
  }
})();
