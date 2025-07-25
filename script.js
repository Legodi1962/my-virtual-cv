// Show welcome alert when the page loads
window.onload = function () {
  alert("Welcome to Lesiba Simon Mahlatse Legodi's Portfolio!");
};

// Automatically update the year in the footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
