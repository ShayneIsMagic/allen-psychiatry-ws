// Simple SMS Privacy Modal functionality
// This file handles the SMS Privacy Policy modal without inline JavaScript

// SMS Modal script loaded

// Global function for showing the modal
window.showSmsPrivacyModal = function() {
    // Opening SMS Privacy Modal
    const modal = document.getElementById('smsPrivacyModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        // Modal displayed
    } else {
        // SMS Privacy Modal not found
    }
};

// Close modal function
window.hideSmsPrivacyModal = function() {
    const modal = document.getElementById('smsPrivacyModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Wait for CSS transition
    }
};

// Event listeners for modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM loaded, setting up SMS modal listeners
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('smsPrivacyModal');
        if (event.target === modal) {
            hideSmsPrivacyModal();
        }
    });
    
    // Add direct click listeners to SMS Privacy Policy links
    const smsLinks = document.querySelectorAll('a[href="#sms-privacy"]');
    // Found SMS links
    
    smsLinks.forEach(function(link, index) {
        // Setting up link
        link.addEventListener('click', function(event) {
            // SMS link clicked directly
            event.preventDefault();
            showSmsPrivacyModal();
        });
    });
    
    // Handle modal close button
    document.addEventListener('click', function(event) {
        if (event.target.hasAttribute('data-action') && event.target.getAttribute('data-action') === 'close-modal') {
            hideSmsPrivacyModal();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('smsPrivacyModal');
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        }
    });
});
