// Simple Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navbarBurger = document.getElementById('navbar-burger');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarBurger.addEventListener('click', function() {
        navbarBurger.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.navbar-item').forEach(function(item) {
        item.addEventListener('click', function() {
            navbarBurger.classList.remove('is-active');
            navbarMenu.classList.remove('is-active');
        });
    });
});
