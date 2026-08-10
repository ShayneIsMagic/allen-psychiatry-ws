// Email Click Handler - Seamless tracking without blocking mailto:
// This ensures GA4 tracking fires without interfering with the email client opening

(function () {
  "use strict";

  // Initialize on DOM ready
  function initEmailTracking() {
    // Find all email links
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(function (link) {
      // Skip if already has onclick handler
      if (link.getAttribute("onclick")) {
        return;
      }

      // Get label from existing onclick or use default
      let label = "Email - Click";
      const existingOnclick = link.getAttribute("onclick");
      if (existingOnclick) {
        const labelMatch = existingOnclick.match(/'event_label':\s*'([^']+)'/);
        if (labelMatch) {
          label = labelMatch[1];
        }
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEmailTracking);
  } else {
    initEmailTracking();
  }
})();
