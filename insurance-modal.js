// Insurance Information Modal Functionality

// Global function to show insurance modal
window.showInsuranceModal = function() {
    const modal = document.getElementById('insuranceModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

// Global function to hide insurance modal
window.hideInsuranceModal = function() {
    const modal = document.getElementById('insuranceModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
};

// Function to proceed to scheduling after viewing insurance info
window.proceedToScheduleFromInsurance = function() {
    hideInsuranceModal();
    // Small delay to allow modal to close smoothly
    setTimeout(() => {
        // Show schedule modal if it exists, otherwise go directly to scheduling
        if (typeof showScheduleModal === 'function') {
            showScheduleModal();
        } else {
            window.open('https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients', '_blank');
        }
    }, 300);
};

// Initialize modal when DOM is ready
function initializeInsuranceModal() {
    // Check if modal already exists
    if (document.getElementById('insuranceModal')) {
        return;
    }
    
    // Create modal HTML
    const modalHTML = `
        <div class="insurance-modal" id="insuranceModal">
            <div class="insurance-modal-content">
                <button class="modal-close-btn" onclick="hideInsuranceModal()" aria-label="Close modal">&times;</button>
                <h3>Insurance Information</h3>
                <div class="insurance-modal-body">
                    <p>Allen Psychiatry is committed to making mental health care accessible. We accept the following insurance plans:</p>
                    
                    <div class="insurance-list-modal">
                        <ul class="insurance-carriers">
                            <li>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <strong>Select Health</strong>
                            </li>
                            <li>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <strong>EMI</strong>
                            </li>
                            <li>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <strong>DMBA</strong>
                            </li>
                            <li>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <strong>PEHP</strong>
                            </li>
                            <li>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <strong>Blue Cross/Blue Shield</strong>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="insurance-verification-box">
                        <p><strong>Important:</strong> Coverage varies by plan and individual policy.</p>
                        <p>We recommend:</p>
                        <ul>
                            <li><strong>Contact your insurance provider</strong> to verify that Allen Psychiatry is in-network for your specific plan</li>
                            <li><strong>Check your benefits</strong> to understand your copay, deductible, and coverage limits</li>
                            <li><strong>Call our office</strong> at <a href="tel:385-504-1334" onclick="gtag('event', 'phone_call_click', {'event_category': 'Conversion', 'event_label': 'Phone Call - Insurance Modal', 'value': 1});" style="color: var(--primary); font-weight: 600;">(385) 504-1334</a> to discuss payment options and insurance questions</li>
                        </ul>
                    </div>
                    
                    <div class="payment-options-box">
                        <p><strong>Payment Options:</strong> In addition to insurance, we also accept cash, credit card, and debit card payments.</p>
                    </div>
                </div>
                <div class="insurance-modal-footer">
                    <button class="btn" onclick="proceedToScheduleFromInsurance(); gtag('event', 'schedule_appointment_click', {'event_category': 'Conversion', 'event_label': 'Schedule Button - Insurance Modal', 'value': 1});">Continue to Schedule</button>
                    <a href="tel:385-504-1334" class="btn btn-outline" onclick="gtag('event', 'phone_call_click', {'event_category': 'Conversion', 'event_label': 'Phone Call - Insurance Modal Footer', 'value': 1});">Call (385) 504-1334</a>
                    <button class="btn btn-outline" onclick="hideInsuranceModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Close modal when clicking outside
    const modal = document.getElementById('insuranceModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideInsuranceModal();
            }
        });
    }
    
    // Add escape key functionality
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideInsuranceModal();
        }
    });
}

// Start waiting for page load
if (document.readyState === 'loading') {
    window.addEventListener('load', function() {
        setTimeout(initializeInsuranceModal, 100);
    });
} else if (document.readyState === 'interactive') {
    window.addEventListener('load', function() {
        setTimeout(initializeInsuranceModal, 100);
    });
} else {
    // Already loaded
    setTimeout(initializeInsuranceModal, 100);
}

