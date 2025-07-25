// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll for navbar links
  const links = document.querySelectorAll('.navbar a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Example: Button click feedback (change text briefly)
  const buttons = document.querySelectorAll('.btn-box a');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const originalText = button.textContent;
      button.textContent = 'Thanks!';
      setTimeout(() => {
        button.textContent = originalText;
      }, 1500);
    });
  });

});
