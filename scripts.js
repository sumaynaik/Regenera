// Simple JS: mobile nav toggle, year injection, and contact form validation
(function () {
  // year
  const year = new Date().getFullYear();
  document.querySelectorAll('[id^="year"]').forEach((el) => (el.textContent = year));

  // --- NAV TOGGLES (works for multiple pages & fallback support) ---
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.querySelector('.navbar ul');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Support for modern .menu-toggle (no ID) + .navbar ul
  const genericMenuBtn = document.querySelector('.menu-toggle');
  const genericNavList = document.querySelector('.navbar ul');
  if (genericMenuBtn && genericNavList) {
    genericMenuBtn.addEventListener('click', () => {
      genericNavList.classList.toggle('show');
    });
  }

  // Compatibility with any .nav-toggle + .main-nav (older pages)
  function attachToggle(idToggle, idNav) {
    const t = document.getElementById(idToggle);
    const n = document.getElementById(idNav);
    if (!t || !n) return;
    t.addEventListener('click', () => {
      n.style.display = n.style.display === 'block' ? 'none' : 'block';
    });
  }

  attachToggle('nav-toggle', 'main-nav');
  attachToggle('nav-toggle-2', 'main-nav-2');
  attachToggle('nav-toggle-3', 'main-nav-3');
  attachToggle('nav-toggle-4', 'main-nav-4');
  attachToggle('nav-toggle-5', 'main-nav-5');

  // Also allow .nav-toggle buttons without IDs (rare cases)
  document.querySelectorAll('.nav-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const legacyNav = document.querySelector('.main-nav') || document.querySelector('.navbar ul');
      if (legacyNav) legacyNav.classList.toggle('show');
    });
  });

  // --- CONTACT FORM HANDLER (no backend) ---
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    const btn = document.getElementById('send-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
          status.textContent = 'Please fill every field.';
          return;
        }
        // simple fake send
        status.textContent = 'Thanks, ' + name + '! Your message was noted (demo).';
        form.reset();
      });
    }
  }
})();
