// Mobile Menu Toggle

// Define which element to select
const hamburgerButton = document.querySelector('.hamburger-menu');

// If the hamburgerButton is clicked, toggle the mobile-menu-open class in the html element
hamburgerButton.addEventListener( 'click', function() {
  document.documentElement.classList.toggle('mobile-menu-open');
  });