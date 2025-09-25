// Allen Psychiatry - External Links Configuration
// This file centralizes all external links and portal configurations
// Update URLs here to change them across the entire website

const ALLEN_PSYCHIATRY_CONFIG = {
    // Patient Portal Configuration
    patientPortal: {
        url: "https://pp-wfe-100.advancedmd.com/154986/account/logon",
        linkText: "Patient Portal",
        openInNewWindow: true
    },
    
    // Online Scheduling Configuration
    scheduling: {
        url: "https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients",
        buttonText: "Schedule Now",
        appointmentText: "Schedule an Appointment",
        onlineText: "schedule an appointment online",
        bookText: "book an appointment online",
        openInNewWindow: true
    },
    
    // Contact Information
    contact: {
        phone: "(385) 504-1334",
        email: "info@allenpsychiatry.net",
        address: "3311 North University Ave, Ste 275, Provo, UT 84604"
    },
    
    // TeleHealth Configuration (for future expansion)
    telehealth: {
        platform: "Secure HIPAA-compliant video conferencing",
        setupInstructions: "We will send a telehealth link by email or text message for your secure telehealth appointment",
        requirements: "device with a camera and microphone, plus a stable internet connection"
    },
    
    // Future Tool Integration Points
    futureTools: {
        // Add new tools here as they become available
        // Example:
        // newTool: {
        //     url: "https://new-tool-url.com",
        //     linkText: "New Tool",
        //     openInNewWindow: true
        // }
    }
};

// Function to get patient portal link with proper attributes
function getPatientPortalLink(linkText = ALLEN_PSYCHIATRY_CONFIG.patientPortal.linkText) {
    const target = ALLEN_PSYCHIATRY_CONFIG.patientPortal.openInNewWindow ? ' target="_blank"' : '';
    return `<a href="${ALLEN_PSYCHIATRY_CONFIG.patientPortal.url}"${target}>${linkText}</a>`;
}

// Function to get scheduling link with proper attributes
function getSchedulingLink(linkText = ALLEN_PSYCHIATRY_CONFIG.scheduling.buttonText, className = '') {
    const target = ALLEN_PSYCHIATRY_CONFIG.scheduling.openInNewWindow ? ' target="_blank"' : '';
    const classAttr = className ? ` class="${className}"` : '';
    return `<a href="${ALLEN_PSYCHIATRY_CONFIG.scheduling.url}"${classAttr}${target}>${linkText}</a>`;
}

// Function to get contact information
function getContactInfo() {
    return ALLEN_PSYCHIATRY_CONFIG.contact;
}

// Function to update all external links on page load (for dynamic updates)
function updateExternalLinks() {
    // Update patient portal links
    const patientPortalLinks = document.querySelectorAll('a[href*="pp-wfe-100.advancedmd.com/154986/account/logon"]');
    patientPortalLinks.forEach(link => {
        link.href = ALLEN_PSYCHIATRY_CONFIG.patientPortal.url;
        if (ALLEN_PSYCHIATRY_CONFIG.patientPortal.openInNewWindow) {
            link.setAttribute('target', '_blank');
        }
    });
    
    // Update scheduling links
    const schedulingLinks = document.querySelectorAll('a[href*="pp-wfe-100.advancedmd.com/154986/onlinescheduling"]');
    schedulingLinks.forEach(link => {
        link.href = ALLEN_PSYCHIATRY_CONFIG.scheduling.url;
        if (ALLEN_PSYCHIATRY_CONFIG.scheduling.openInNewWindow) {
            link.setAttribute('target', '_blank');
        }
    });
}

// Auto-update links when config is loaded
document.addEventListener('DOMContentLoaded', updateExternalLinks);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALLEN_PSYCHIATRY_CONFIG;
}
