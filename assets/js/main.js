// Smart Drug Delivery Computing — site behaviour
(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Fade-in on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form: compose an email in the visitor's mail app
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var f = form.elements;
      var to = form.getAttribute('data-email');
      var subject = '[Website enquiry] ' + f.topic.value + ' — ' + f.name.value;
      var body =
        'Name: ' + f.name.value + '\n' +
        'Email: ' + f.email.value + '\n' +
        'Organisation: ' + (f.organisation.value || '-') + '\n' +
        'Topic: ' + f.topic.value + '\n\n' +
        f.message.value + '\n';
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
