// ── Carta de Vinhos – interações ──────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar tab switching ───────────────────────────────
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.menu-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;

      navBtns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ── Highlight wine items on click ─────────────────────
  document.querySelectorAll('.wine-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });

  // ── Entrance animation ────────────────────────────────
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('fade-in');
    observer.observe(page);
  });

});
