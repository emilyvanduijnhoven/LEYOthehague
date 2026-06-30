/* LEYO the Hague — site interactions
   Klein en zelfstandig, geen dependencies. */
(function () {
  'use strict';

  /* ---- mobiele nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  /* ---- actieve pagina in nav markeren ---- */
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });

  /* ---- taalwissel (demo: alleen visueel) ---- */
  document.querySelectorAll('.lang span').forEach(function (s) {
    s.addEventListener('click', function () {
      document.querySelectorAll('.lang span').forEach(function (x) { x.classList.remove('active'); });
      s.classList.add('active');
    });
  });

  /* ---- formulieren (demo) ---- */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      var ok = form.getAttribute('data-success') ||
        'Bedankt — je staat op de lijst. We laten van ons horen bij de eerstvolgende drop.';
      if (msg) { msg.textContent = ok; }
      form.querySelectorAll('input').forEach(function (i) { i.value = ''; });
    });
  });

  /* ---- FAQ accordeon ---- */
  document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      q.parentElement.classList.toggle('open');
      var sign = q.querySelector('span');
      if (sign) sign.textContent = q.parentElement.classList.contains('open') ? '–' : '+';
    });
  });

  /* ---- woningzoeker filter ---- */
  var chips = document.querySelectorAll('.finder-chip');
  var cards = document.querySelectorAll('.finder-grid .drop-card');
  var countEl = document.querySelector('.finder-count');
  function applyFilter(filter) {
    var shown = 0;
    cards.forEach(function (c) {
      var match = filter === 'all' || (c.getAttribute('data-size') === filter);
      c.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    if (countEl) countEl.textContent = shown + ' van ' + cards.length + ' studio’s';
  }
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.remove('active'); });
        chip.classList.add('active');
        applyFilter(chip.getAttribute('data-filter'));
      });
    });
    applyFilter('all');
  }
})();
