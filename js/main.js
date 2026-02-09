/* ===========================
   WoodWorkz — Main JavaScript
   =========================== */

(function () {
    'use strict';

    /* ---------- Header scroll effect ---------- */
    const header = document.getElementById('header');

    function onScroll() {
        if (window.scrollY > 40) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('nav__menu--open');
        navToggle.classList.toggle('nav__toggle--active');
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('nav__menu--open');
            navToggle.classList.remove('nav__toggle--active');
        });
    });

    /* ---------- Active nav link on scroll ---------- */
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        var scrollY = window.scrollY + 120;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav__link[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('nav__link--active');
                } else {
                    link.classList.remove('nav__link--active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    /* ---------- Scroll-reveal animation ---------- */
    var animatedElements = document.querySelectorAll(
        '.service-card, .about__content, .contact__grid'
    );

    animatedElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in--visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedElements.forEach(function (el) {
        observer.observe(el);
    });

    /* ---------- Contact form handling ---------- */
    var form = document.getElementById('contact-form');
    var feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        var naam = document.getElementById('naam').value.trim();
        var email = document.getElementById('email').value.trim();
        var bericht = document.getElementById('bericht').value.trim();

        // Basic validation
        if (!naam || !email || !bericht) {
            showFeedback('Vul alle verplichte velden in.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFeedback('Vul een geldig e-mailadres in.', 'error');
            return;
        }

        // Simulate form submission (no backend)
        showFeedback(
            'Bedankt voor uw bericht, ' + naam + '! Wij nemen zo snel mogelijk contact met u op.',
            'success'
        );
        form.reset();
    });

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = 'form__feedback';
        feedback.classList.add('form__feedback--' + type);

        // Auto-hide after 6 seconds
        setTimeout(function () {
            feedback.className = 'form__feedback';
        }, 6000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /* ---------- Smooth scroll for Safari fallback ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
