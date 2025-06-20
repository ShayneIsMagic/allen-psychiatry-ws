// Telehealth Modal Functionality

// Global functions for modal handling
window.showTelehealthModal = function() {
    const modal = document.getElementById('telehealthModal');
    const options = document.getElementById('telehealthOptions');
    
    if (!modal) {
        return;
    }
    
    // Reset modal state
    options.classList.remove('show');
    modal.classList.add('show');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideTelehealthModal();
        }
    });
};

window.hideTelehealthModal = function() {
    const modal = document.getElementById('telehealthModal');
    if (modal) {
        modal.classList.remove('show');
    }
};

window.handleTelehealthResponse = function(hasAppointment) {
    const options = document.getElementById('telehealthOptions');
    
    if (hasAppointment) {
        // User has appointment - redirect to portal
        window.location.href = 'https://pp-wfe-100.advancedmd.com/154986/account/logon';
    } else {
        // User doesn't have appointment - show options
        options.classList.add('show');
    }
};

// Initialize modal when DOM is ready
function initializeModal() {
    // Check if modal already exists
    if (document.getElementById('telehealthModal')) {
        return;
    }
    
    // Create modal HTML
    const modalHTML = `
        <div class="telehealth-modal" id="telehealthModal">
            <div class="telehealth-modal-content">
                <h3>Telehealth Access</h3>
                <p>Do you have a Telehealth appointment scheduled with Dr. Todd Allen?</p>
                <div class="telehealth-buttons">
                    <button class="telehealth-btn yes" onclick="handleTelehealthResponse(true)">Yes</button>
                    <button class="telehealth-btn no" onclick="handleTelehealthResponse(false)">No</button>
                </div>
                <div class="telehealth-options" id="telehealthOptions">
                    <h4>Let's get you connected:</h4>
                    <a href="https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients" class="btn">Schedule an Appointment</a>
                    <a href="tel:385-504-1334" class="btn btn-outline">Call (385) 504-1334</a>
                    <a href="mailto:info@allenpsychiatry.net" class="btn btn-outline">Email Us</a>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add click handlers to portal links
    const portalLinks = document.querySelectorAll('a[href*="portal"]');
    portalLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showTelehealthModal();
        });
    });
    
    // Add escape key functionality
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideTelehealthModal();
        }
    });
}

// Try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModal);
} else {
    // DOM is already loaded
    initializeModal();
} 