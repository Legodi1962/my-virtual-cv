// Smooth scroll for nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  });
});
