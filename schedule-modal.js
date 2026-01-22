// Schedule Appointment Modal Functionality

// Global function to show schedule modal
window.showScheduleModal = function() {
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

// Global function to hide schedule modal
window.hideScheduleModal = function() {
    const modal = document.getElementById('scheduleModal');
    if (modal) {
        modal.classList.remove('show');
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
    
    // Add click handlers to schedule appointment links/buttons
    const scheduleLinks = document.querySelectorAll('a[href*="onlinescheduling"]');
    scheduleLinks.forEach((link) => {
        // Only modify links that have the onclick with schedule_appointment_click
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes('schedule_appointment_click')) {
            // Store original onclick
            const originalOnclick = link.getAttribute('onclick');
            
            // Remove the original onclick to prevent direct navigation
            link.removeAttribute('onclick');
            
            // Add new click handler
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Show the modal
                showScheduleModal();
                
                // Execute the original gtag tracking if it exists
                if (originalOnclick && typeof gtag !== 'undefined') {
                    try {
                        // Extract and execute the gtag call
                        const gtagMatch = originalOnclick.match(/gtag\([^)]+\)/);
                        if (gtagMatch) {
                            eval(gtagMatch[0]);
                        }
                    } catch (err) {
                        console.log('Error executing gtag:', err);
                    }
                }
            });
        }
    });
    
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

// Try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScheduleModal);
} else {
    // DOM is already loaded
    initializeScheduleModal();
}

