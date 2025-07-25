// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Alert on Hire Me button click
document.querySelectorAll('.btn-box a[href="#contact"]').forEach(button => {
  button.addEventListener('click', () => {
    alert("Thanks for your interest! You can contact me via email or LinkedIn.");
  });
});
