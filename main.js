// Caroline Arndt — landing page interactions

document.addEventListener('DOMContentLoaded', () => {
    // Current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile nav toggle
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    if (toggle && header) {
        toggle.addEventListener('click', () => {
            const open = header.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
        // Close menu when a link is tapped
        header.querySelectorAll('.mobile-nav a').forEach((a) => {
            a.addEventListener('click', () => {
                header.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }
});
