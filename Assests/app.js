(function () {
  'use strict';
  function init() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    var toggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? '✕' : '☰';
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.textContent = '☰';
        });
      });
    }

    var vmTabs = document.querySelectorAll('.vm-tab');
    var vmPanels = {
      vision: document.getElementById('vision-panel'),
      mission: document.getElementById('mission-panel')
    };
    vmTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        vmTabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('active', active);
          t.setAttribute('aria-selected', String(active));
        });
        Object.keys(vmPanels).forEach(function (key) {
          if (vmPanels[key]) vmPanels[key].hidden = key !== tab.dataset.vm;
        });
      });
    });

    // Make local SVG/image cards consistently fill their frames.
    document.querySelectorAll('.card img, .feature img, .hero-art img').forEach(function (img) {
      img.loading = img.loading || 'lazy';
      img.decoding = 'async';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
