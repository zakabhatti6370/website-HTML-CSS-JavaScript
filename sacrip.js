
  document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const imageSrc = this.getAttribute('href');

      let overlay = document.createElement('div');
      overlay.classList.add('lightbox-overlay');
      overlay.innerHTML = `<img src="${imageSrc}" alt="Lightbox Image">`;

      document.body.appendChild(overlay);
      setTimeout(() => overlay.classList.add('active'), 10);

      overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
      });
    });
  });

