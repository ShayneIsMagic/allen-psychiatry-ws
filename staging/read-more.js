document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            button.addEventListener('click', () => {
                const isHidden = targetElement.style.display === 'none' || targetElement.style.display === '';

                if (isHidden) {
                    targetElement.style.display = 'block';
                    button.textContent = button.getAttribute('data-less-text') || 'Show Less';
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                } else {
                    targetElement.style.display = 'none';
                    button.textContent = button.getAttribute('data-more-text') || 'Learn More';
                }
            });

            // Set the initial state of the button text
            const isHidden = targetElement.style.display === 'none' || targetElement.style.display === '';
            if (isHidden) {
                button.textContent = button.getAttribute('data-more-text') || 'Learn More';
            } else {
                button.textContent = button.getAttribute('data-less-text') || 'Show Less';
            }
        }
    });

    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        const readMoreBtn = document.querySelector(`.read-more-btn[data-target="${targetId}"]`);

        if (targetElement && readMoreBtn) {
            button.addEventListener('click', () => {
                targetElement.style.display = 'none';
                readMoreBtn.textContent = readMoreBtn.getAttribute('data-more-text') || 'Learn More';
            });
        }
    });
}); 