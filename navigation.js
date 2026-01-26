document.addEventListener('DOMContentLoaded', function () {
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top-btn');

    if (backToTopButton) {
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }

        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a nav link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Dropdown menu toggle (for Services dropdown - mobile only)
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function(e) {
            // Only handle click on mobile (when hamburger menu is open)
            // On desktop, hover should work, so don't interfere
            const isMobile = window.innerWidth <= 768;
            const nav = document.querySelector('.main-nav');
            const isMenuOpen = nav && nav.classList.contains('active');
            
            if (!isMobile && !isMenuOpen) {
                // Desktop with menu closed - let hover work, don't prevent default
                return;
            }
            
            // Mobile or menu open - handle click
            const href = this.getAttribute('href');
            if (href && href === '/#services' && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
                // Navigate to homepage services section
                window.location.href = '/#services';
                return;
            }
            // On homepage or same page, toggle dropdown
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        });
    });
}); 