document.querySelector('.menu').addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  });
  