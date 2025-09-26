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
    
    // Add direct click listeners to SMS Privacy Policy links
    const smsLinks = document.querySelectorAll('a[href="#sms-privacy"]');
    console.log('Found SMS links:', smsLinks.length);
    
    smsLinks.forEach(function(link, index) {
        console.log('Setting up link', index, ':', link);
        link.addEventListener('click', function(event) {
            console.log('SMS link clicked directly!');
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
