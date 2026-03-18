// ── Carta de Vinhos – interações ──────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Highlight wine items on click (toggle active state)
  document.querySelectorAll('.wine-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });

  // Add subtle entrance animation to pages
  const pages = document.querySelectorAll('.page');
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

  pages.forEach(page => {
    page.classList.add('fade-in');
    observer.observe(page);
  });

});
