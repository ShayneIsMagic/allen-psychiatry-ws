// Simple SMS Privacy Modal functionality
// This file handles the SMS Privacy Policy modal without inline JavaScript

console.log('SMS Modal script loaded');

// Global function for showing the modal
window.showSmsPrivacyModal = function() {
    console.log('Opening SMS Privacy Modal');
    const modal = document.getElementById('smsPrivacyModal');
    if (modal) {
        modal.style.display = 'block';
        console.log('Modal displayed');
    } else {
        console.error('SMS Privacy Modal not found');
    }
};

// Close modal function
window.hideSmsPrivacyModal = function() {
    const modal = document.getElementById('smsPrivacyModal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// Event listeners for modal functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up SMS modal listeners');
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('smsPrivacyModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle modal actions
    document.addEventListener('click', function(event) {
        console.log('Click detected on:', event.target);
        if (event.target.hasAttribute('data-action')) {
            const action = event.target.getAttribute('data-action');
            console.log('Action detected:', action);
            if (action === 'close-modal') {
                hideSmsPrivacyModal();
            } else if (action === 'show-sms-modal') {
                event.preventDefault();
                console.log('Preventing default and showing modal');
                showSmsPrivacyModal();
            }
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
