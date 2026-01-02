// Service Areas Modal
// Displays service areas with highlighting for in-person (Provo) vs telehealth

window.showServiceAreasModal = function() {
    const modal = document.getElementById('serviceAreasModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

window.hideServiceAreasModal = function() {
    const modal = document.getElementById('serviceAreasModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
};

// Initialize modal when DOM is ready
function initializeServiceAreasModal() {
    // Check if modal already exists
    if (document.getElementById('serviceAreasModal')) {
        return;
    }

    // Create modal structure
    const modal = document.createElement('div');
    modal.id = 'serviceAreasModal';
    modal.className = 'service-areas-modal';
    modal.innerHTML = `
        <div class="service-areas-modal-content">
            <button class="modal-close-btn" onclick="hideServiceAreasModal();" aria-label="Close modal">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <div class="modal-header">
                <h2>Service Areas</h2>
                <p>We're proud to serve communities throughout Utah County and rural Utah</p>
            </div>
            <div class="modal-body">
                <div class="service-areas-grid">
                    <div class="service-area-column provo-office">
                        <div class="service-area-badge">
                            <i class="fa fa-building" aria-hidden="true"></i>
                            <span>In-Person Visits</span>
                        </div>
                        <h3>Utah County Cities</h3>
                        <p class="service-area-description">Visit our Provo office for convenient in-person appointments</p>
                        <ul>
                            <li>Provo</li>
                            <li>Orem</li>
                            <li>Lehi</li>
                            <li>Spanish Fork</li>
                            <li>American Fork</li>
                            <li>Springville</li>
                            <li>Pleasant Grove</li>
                            <li>Payson</li>
                            <li>Saratoga Springs</li>
                            <li>Eagle Mountain</li>
                            <li>Lindon</li>
                            <li>Mapleton</li>
                            <li>Highland</li>
                            <li>Alpine</li>
                            <li>Salem</li>
                            <li>Vineyard</li>
                            <li>Cedar Hills</li>
                        </ul>
                    </div>
                    <div class="service-area-column telehealth">
                        <div class="service-area-badge telehealth-badge">
                            <i class="fa fa-video-camera" aria-hidden="true"></i>
                            <span>Telehealth Available</span>
                        </div>
                        <h3>Sevier County & Rural Communities</h3>
                        <p class="service-area-description">Secure telehealth appointments for your convenience</p>
                        <ul>
                            <li>Richfield</li>
                            <li>Monroe</li>
                            <li>Salina</li>
                            <li>Elsinore</li>
                            <li>Koosharem</li>
                            <li>Sigurd</li>
                            <li>Glenwood</li>
                            <li>Aurora</li>
                            <li>Redmond</li>
                            <li>Central Valley</li>
                            <li>Annabella</li>
                            <li>Joseph</li>
                        </ul>
                    </div>
                    <div class="service-area-column additional">
                        <div class="service-area-badge additional-badge">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>Additional Areas</span>
                        </div>
                        <h3>Additional Service Areas</h3>
                        <p class="service-area-description">We serve these communities with flexible options</p>
                        <ul>
                            <li>Genola</li>
                            <li>Elk Ridge</li>
                            <li>Woodland Hills</li>
                            <li>Goshen</li>
                            <li>Cedar Fort</li>
                            <li>Fairfield</li>
                            <li>Benjamin</li>
                            <li>West Mountain</li>
                            <li>Spring Lake</li>
                            <li>Elberta</li>
                            <li>Lake Shore</li>
                            <li>Palmyra</li>
                        </ul>
                    </div>
                </div>
                <div class="service-areas-cta">
                    <p><strong>Looking for psychiatric services in your area?</strong></p>
                    <p>Whether you're in Provo, Orem, Lehi, Spanish Fork, American Fork, Springville, or any rural Utah community, we're here to help. Our Provo office is easily accessible, and we offer telehealth appointments for your convenience.</p>
                    <div class="service-areas-buttons">
                        <a href="/provo" class="btn btn-secondary" onclick="hideServiceAreasModal(); gtag('event', 'service_area_click', {'event_category': 'Navigation', 'event_label': 'Provo Office - Service Areas Modal', 'value': 1});">Visit Provo Office</a>
                        <a href="/telehealth" class="btn btn-secondary" onclick="hideServiceAreasModal(); gtag('event', 'service_area_click', {'event_category': 'Navigation', 'event_label': 'Telehealth - Service Areas Modal', 'value': 1});">Learn About Telehealth</a>
                        <a href="https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients" class="btn" target="_blank" onclick="hideServiceAreasModal(); gtag('event', 'schedule_appointment_click', {'event_category': 'Conversion', 'event_label': 'Schedule Button - Service Areas Modal', 'value': 1});">Schedule Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideServiceAreasModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideServiceAreasModal();
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeServiceAreasModal);
} else {
    initializeServiceAreasModal();
}

