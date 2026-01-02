// Appointment Clarification Modal
// Used for Rural Services and Telehealth pages to clarify initial appointment requirements

window.showAppointmentClarification = function() {
    const modal = document.getElementById('appointmentClarificationModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

window.hideAppointmentClarification = function() {
    const modal = document.getElementById('appointmentClarificationModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
};

window.proceedToScheduling = function() {
    hideAppointmentClarification();
    // Direct to scheduling system
    window.open('https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients', '_blank');
};

// Initialize modal when DOM is ready
function initializeAppointmentClarificationModal() {
    // Check if modal already exists
    if (document.getElementById('appointmentClarificationModal')) {
        return;
    }

    // Create modal HTML
    const modalHTML = `
        <div class="appointment-clarification-modal" id="appointmentClarificationModal">
            <div class="appointment-clarification-modal-content">
                <button class="modal-close-btn" onclick="hideAppointmentClarification()" aria-label="Close">&times;</button>
                <h3>Important Appointment Information</h3>
                <div class="clarification-content">
                    <p><strong>Initial appointment must be in-person.</strong></p>
                    <p>All future appointments can be telehealth (as recommended by Dr. Allen).</p>
                </div>
                <div class="clarification-actions">
                    <button class="btn" onclick="proceedToScheduling()">Continue to Scheduling</button>
                    <div class="alternative-options">
                        <p>Or contact us directly:</p>
                        <a href="tel:385-504-1334" class="btn btn-outline">Call (385) 504-1334</a>
                        <a href="mailto:info@allenpsychiatry.net" class="btn btn-outline">Email Us</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Close modal when clicking outside
    const modal = document.getElementById('appointmentClarificationModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideAppointmentClarification();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('appointmentClarificationModal');
            if (modal && modal.classList.contains('show')) {
                hideAppointmentClarification();
            }
        }
    });
}

// Try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAppointmentClarificationModal);
} else {
    // DOM is already loaded
    initializeAppointmentClarificationModal();
}


