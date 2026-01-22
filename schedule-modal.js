// Schedule Appointment Modal Functionality

// Global function to show schedule modal
window.showScheduleModal = function() {
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

// Global function to hide schedule modal
window.hideScheduleModal = function() {
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
};

// Function to proceed to scheduling (after showing modal)
window.proceedToSchedule = function() {
    hideScheduleModal();
    // Small delay to allow modal to close smoothly
    setTimeout(() => {
        window.open('https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients', '_blank');
    }, 300);
};

// Initialize modal when DOM is ready
function initializeScheduleModal() {
    // Check if modal already exists
    if (document.getElementById('scheduleModal')) {
        return;
    }
    
    // Create modal HTML
    const modalHTML = `
        <div class="schedule-modal" id="scheduleModal">
            <div class="schedule-modal-content">
                <button class="modal-close-btn" onclick="hideScheduleModal()" aria-label="Close modal">&times;</button>
                <h3>Allen Psychiatry Opens Second Provo Location!</h3>
                <div class="schedule-modal-body">
                    <p>We're excited to announce that Allen Psychiatry has opened an additional location to better serve our patients.</p>
                    <p><strong>Dr. Allen is now seeing patients at two convenient Provo locations:</strong></p>
                    <ul class="schedule-locations">
                        <li><strong>Physicians Plaza</strong> (next to Utah Valley Hospital)<br>
                        1055 North 300 West, Suite 308, Provo, Utah 84604</li>
                        <li><strong>Jamestown Square</strong><br>
                        3311 N University Ave, Suite 275, Provo, Utah 84604</li>
                    </ul>
                    <div class="schedule-hours">
                        <p><strong>Office Hours:</strong></p>
                        <ul>
                            <li>Monday, Wednesday, Thursday, Friday – 1:00 PM to 5:00 PM (in-person appointments; Telehealth available, but Tuesday is prioritized for Telehealth)</li>
                            <li>Tuesday – 3:00 PM to 6:00 PM (TeleHealth only)</li>
                        </ul>
                    </div>
                    <p>To schedule an appointment at your preferred location, call or text us at <a href="tel:385-504-1334" style="color: var(--primary); font-weight: 600;">385-504-1334</a>.</p>
                    <p>Visit us online at <a href="https://allenpsychiatry.net" style="color: var(--primary); font-weight: 600;">allenpsychiatry.net</a></p>
                    <p style="margin-top: 20px; font-weight: 600; color: var(--primary);">We look forward to seeing you!</p>
                </div>
                <div class="schedule-modal-footer">
                    <button class="btn" onclick="proceedToSchedule(); gtag('event', 'schedule_appointment_click', {'event_category': 'Conversion', 'event_label': 'Schedule Button - Modal', 'value': 1});">Continue to Schedule</button>
                    <button class="btn btn-outline" onclick="hideScheduleModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Explicitly ensure modal is hidden on creation
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Use event delegation on document to catch ALL schedule link clicks
    // This works even if links are added dynamically
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href*="onlinescheduling"]');
        if (!link) return;
        
        // Check if this link should show the modal
        const onclickAttr = link.getAttribute('onclick');
        const shouldShowModal = onclickAttr && onclickAttr.includes('schedule_appointment_click');
        
        if (shouldShowModal) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Show the modal
            showScheduleModal();
            
            // Execute the original gtag tracking if it exists (CSP-safe method, no eval)
            if (onclickAttr && typeof gtag !== 'undefined') {
                try {
                    // Extract gtag parameters safely without eval
                    // Format: gtag('event', 'schedule_appointment_click', {'event_category': 'Conversion', 'event_label': '...', 'value': 1})
                    const gtagMatch = onclickAttr.match(/gtag\s*\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*({[^}]+})\s*\)/);
                    if (gtagMatch) {
                        const eventType = gtagMatch[1]; // 'event'
                        const eventName = gtagMatch[2]; // 'schedule_appointment_click'
                        const eventParamsStr = gtagMatch[3]; // '{'event_category': 'Conversion', ...}'
                        
                        // Parse the parameters object safely
                        let eventParams = {};
                        // Extract parameters manually to avoid eval/JSON.parse issues
                        const categoryMatch = eventParamsStr.match(/'event_category'\s*:\s*'([^']+)'/);
                        const labelMatch = eventParamsStr.match(/'event_label'\s*:\s*'([^']+)'/);
                        const valueMatch = eventParamsStr.match(/'value'\s*:\s*(\d+)/);
                        
                        if (categoryMatch) eventParams.event_category = categoryMatch[1];
                        if (labelMatch) eventParams.event_label = labelMatch[1];
                        if (valueMatch) eventParams.value = parseInt(valueMatch[1], 10);
                        
                        // Call gtag directly (CSP-safe, no eval)
                        if (eventType && eventName) {
                            gtag(eventType, eventName, eventParams);
                        }
                    }
                } catch (err) {
                    // Silently fail gtag execution - don't break the modal
                }
            }
            
            return false;
        }
    }, true); // Use capture phase to catch before other handlers
    
    // Close modal when clicking outside
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideScheduleModal();
            }
        });
    }
    
    // Add escape key functionality
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideScheduleModal();
        }
    });
}

// Wait for full page load to ensure all scripts have run
function waitForPageLoad() {
    if (document.readyState === 'complete') {
        // Use setTimeout to ensure this runs after all other scripts
        setTimeout(initializeScheduleModal, 100);
    } else {
        window.addEventListener('load', function() {
            setTimeout(initializeScheduleModal, 100);
        });
    }
}

// Start waiting for page load
if (document.readyState === 'loading') {
    window.addEventListener('load', function() {
        setTimeout(initializeScheduleModal, 100);
    });
} else if (document.readyState === 'interactive') {
    window.addEventListener('load', function() {
        setTimeout(initializeScheduleModal, 100);
    });
} else {
    // Already loaded
    setTimeout(initializeScheduleModal, 100);
}

