// Patient Portal Modal Functionality

// Global functions for modal handling
window.showPatientPortalModal = function() {
    const modal = document.getElementById('patientPortalModal');
    const options = document.getElementById('patientPortalOptions');
    
    if (!modal) {
        return;
    }
    
    // Reset modal state
    options.classList.remove('show');
    modal.classList.add('show');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hidePatientPortalModal();
        }
    });
};

window.hidePatientPortalModal = function() {
    const modal = document.getElementById('patientPortalModal');
    if (modal) {
        modal.classList.remove('show');
    }
};

window.redirectToPatientPortal = function() {
    window.open('https://pp-wfe-100.advancedmd.com/154986/account/logon', '_blank');
    hidePatientPortalModal();
};

window.handlePatientPortalResponse = function(hasAppointment) {
    const options = document.getElementById('patientPortalOptions');
    
    if (hasAppointment) {
        // User has appointment - redirect to portal
        redirectToPatientPortal();
    } else {
        // User doesn't have appointment - show options
        options.classList.add('show');
    }
};

// Initialize modal when DOM is ready
function initializePatientPortalModal() {
    // Check if modal already exists
    if (document.getElementById('patientPortalModal')) {
        return;
    }
    
    // Create modal HTML
    const modalHTML = `
        <div class="patient-portal-modal" id="patientPortalModal">
            <div class="patient-portal-modal-content">
                <h3>Patient Portal Access</h3>
                <p>Do you have an appointment scheduled with Dr. Todd Allen?</p>
                <div class="patient-portal-buttons">
                    <button class="patient-portal-btn primary" onclick="handlePatientPortalResponse(true)">Yes</button>
                    <button class="patient-portal-btn secondary" onclick="handlePatientPortalResponse(false)">No</button>
                </div>
                <div class="patient-portal-options" id="patientPortalOptions">
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
    
    // Add click handlers to patient portal links
    const portalLinks = document.querySelectorAll('a[href*="advancedmd.com"]');
    portalLinks.forEach((link) => {
        if (link.href.includes('logon')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showPatientPortalModal();
            });
        }
    });
    
    // Add escape key functionality
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hidePatientPortalModal();
        }
    });
}

// Try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePatientPortalModal);
} else {
    // DOM is already loaded
    initializePatientPortalModal();
} 