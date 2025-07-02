// Mobile menu toggle
document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('.nav__links').classList.toggle('open');
});

// Smooth scroll for in‑page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.nav__links').classList.remove('open');
  });
});
