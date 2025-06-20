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
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
}); 