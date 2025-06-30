// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navItems = document.querySelector('.nav-items');
  
  if (hamburgerMenu && navItems) {
    hamburgerMenu.addEventListener('click', function() {
      navItems.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navItems && navItems.classList.contains('active')) {
      if (!e.target.closest('.nav-items') && !e.target.closest('.hamburger-menu')) {
        navItems.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navItems) {
      navItems.classList.remove('active');
      if (hamburgerMenu) {
        hamburgerMenu.classList.remove('active');
      }
    }
  });
}); 