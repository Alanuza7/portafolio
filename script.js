/* ==========================================================================
   ALAN.DEV — Portfolio
   1. Menú móvil
   2. Cierre de menú al navegar
   3. Animación de aparición al hacer scroll
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Menú móvil ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const body = document.body;

  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    body.classList.remove('nav-open');
  };

  const openMenu = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('is-open');
    body.classList.add('nav-open');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  /* ---------- 2. Cierre de menú al navegar ---------- */
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar el menú con la tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  /* ---------- 3. Animación de aparición al hacer scroll ---------- */
  const revealTargets = document.querySelectorAll(
    '.about-content, .section-heading, .skill-card, .project, .education-item, .contact-grid > *'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }
});
