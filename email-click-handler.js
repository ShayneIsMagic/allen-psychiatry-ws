// Email Click Handler - Seamless tracking without blocking mailto:
// This ensures GA4 tracking fires without interfering with the email client opening

(function() {
    'use strict';
    
    // Track email clicks seamlessly
    function trackEmailClick(label) {
        // Fire tracking asynchronously - don't block mailto:
        if (typeof gtag !== 'undefined') {
            // Use setTimeout to ensure mailto: opens immediately
            setTimeout(function() {
                gtag('event', 'email_click', {
                    'event_category': 'Conversion',
                    'event_label': label || 'Email - Click',
                    'value': 1
                });
            }, 0);
        }
    }
    
    // Initialize on DOM ready
    function initEmailTracking() {
        // Find all email links
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        emailLinks.forEach(function(link) {
            // Skip if already has onclick handler
            if (link.getAttribute('onclick')) {
                return;
            }
            
            // Get label from existing onclick or use default
            let label = 'Email - Click';
            const existingOnclick = link.getAttribute('onclick');
            if (existingOnclick) {
                const labelMatch = existingOnclick.match(/'event_label':\s*'([^']+)'/);
                if (labelMatch) {
                    label = labelMatch[1];
                }
            }
            
            // Add click handler that doesn't block mailto:
            link.addEventListener('click', function(e) {
                // Track the click (non-blocking)
                trackEmailClick(label);
                // Let mailto: proceed normally
            }, { passive: true });
        });
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEmailTracking);
    } else {
        initEmailTracking();
    }
})();

