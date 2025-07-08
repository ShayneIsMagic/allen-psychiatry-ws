// SMS Privacy Policy Modal Functionality

// Global functions for modal handling
window.showSmsPrivacyModal = function() {
    let modal = document.getElementById('smsPrivacyModal');
    if (!modal) {
        // If modal doesn't exist, create it
        createSmsPrivacyModal();
        modal = document.getElementById('smsPrivacyModal');
    }
    modal.classList.add('show');
};

window.hideSmsPrivacyModal = function() {
    const modal = document.getElementById('smsPrivacyModal');
    if (modal) {
        modal.classList.remove('show');
    }
};

function createSmsPrivacyModal() {
    // Check if modal already exists
    if (document.getElementById('smsPrivacyModal')) {
        return;
    }
    // Create modal HTML
    const modalHTML = `
        <div class="sms-privacy-modal" id="smsPrivacyModal">
            <div class="sms-privacy-modal-content">
                <div class="modal-header">
                    <h3>SMS Privacy Policy</h3>
                    <button class="close-btn" onclick="hideSmsPrivacyModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="policy-header">
                        <h4>Allen Psychiatry LLC</h4>
                        <p><strong>Effective Date:</strong> 7/10/2025</p>
                    </div>
                    <div class="policy-section">
                        <h5>Important Healthcare Communication Notice</h5>
                        <p>Allen Psychiatry LLC is committed to protecting your privacy and maintaining the confidentiality of your protected health information (PHI) in accordance with HIPAA regulations and Utah state law.</p>
                    </div>
                    <div class="policy-section">
                        <h5>SMS/Text Messaging Consent & Privacy</h5>
                        <p>By providing your mobile phone number and consenting to SMS communications, you acknowledge and agree to the following:</p>
                    </div>
                    <div class="policy-section">
                        <h5>Information We Collect</h5>
                        <ul>
                            <li>Mobile phone number</li>
                            <li>Name and basic contact information</li>
                            <li>Appointment scheduling information</li>
                            <li>General healthcare reminders (non-specific)</li>
                        </ul>
                    </div>
                    <div class="policy-section">
                        <h5>How We Use SMS Communications</h5>
                        <p>SMS messages may include:</p>
                        <ul>
                            <li>Appointment confirmations and reminders</li>
                            <li>General wellness tips and practice updates</li>
                            <li>Prescription refill reminders</li>
                            <li>Practice announcements</li>
                        </ul>
                        <p><strong>Important:</strong> We do NOT send detailed medical information, test results, or specific treatment details via SMS due to security limitations.</p>
                    </div>
                    <div class="policy-section">
                        <h5>Security Limitations & Risks</h5>
                        <p>You understand that SMS/text messaging:</p>
                        <ul>
                            <li>Is NOT a secure form of communication</li>
                            <li>May be intercepted by unauthorized parties</li>
                            <li>Should NOT be used for urgent medical matters</li>
                            <li>May be stored on your device and potentially accessible to others</li>
                            <li>Could be subject to data breaches at your mobile carrier</li>
                        </ul>
                    </div>
                    <div class="policy-section">
                        <h5>Your Rights & Choices</h5>
                        <ul>
                            <li><strong>Opt-Out:</strong> Reply STOP to any text message to discontinue SMS communications</li>
                            <li><strong>Frequency:</strong> You may receive up to 4 messages per month</li>
                            <li><strong>Charges:</strong> Standard message and data rates may apply from your carrier</li>
                            <li><strong>Access/Correction:</strong> Contact us at (385) 504-1334 to update your information</li>
                        </ul>
                    </div>
                    <div class="policy-section">
                        <h5>Third-Party Sharing</h5>
                        <p>We do NOT sell, rent, or share your information with third parties for marketing purposes. Your information may only be shared:</p>
                        <ul>
                            <li>With our HIPAA-compliant SMS service provider for message delivery</li>
                            <li>As required by law or court order</li>
                            <li>In medical emergencies with your consent or as legally permitted</li>
                        </ul>
                    </div>
                    <div class="policy-section">
                        <h5>Emergency Communications</h5>
                        <p><strong>DO NOT use SMS for medical emergencies.</strong> For urgent mental health concerns:</p>
                        <ul>
                            <li>Call 911 immediately</li>
                            <li>Contact our office at (385) 504-1334</li>
                            <li>National Suicide Prevention Lifeline: 988</li>
                            <li>Crisis Text Line: Text HOME to 741741</li>
                        </ul>
                    </div>
                    <div class="policy-section">
                        <h5>HIPAA Compliance</h5>
                        <p>This SMS service is designed to comply with HIPAA requirements. However, standard SMS technology has inherent security limitations. For secure communications, please use our patient portal or call our office directly.</p>
                    </div>
                    <div class="policy-section">
                        <h5>Data Retention</h5>
                        <p>SMS communications are retained according to our medical records retention policy and HIPAA requirements, typically 7 years from the date of last contact.</p>
                    </div>
                    <div class="policy-section">
                        <h5>Utah State Law Compliance</h5>
                        <p>This policy complies with Utah healthcare privacy regulations and the Utah Mental Health Professional Practice Act.</p>
                    </div>
                    <div class="policy-section">
                        <h5>Policy Updates</h5>
                        <p>We may update this policy as needed to comply with changing regulations. Updated policies will be available on our website and you will be notified of significant changes.</p>
                    </div>
                    <div class="policy-section">
                        <h5>Contact Information</h5>
                        <p>For questions about this SMS Privacy Policy or to modify your communication preferences:</p>
                        <ul>
                            <li><strong>Phone:</strong> (385) 504-1334</li>
                            <li><strong>Email:</strong> info@allenpsychiatry.net</li>
                            <li><strong>Address:</strong> 3311 North University Ave, Suite 275, Provo, UT 84604</li>
                        </ul>
                    </div>
                    <div class="policy-section">
                        <h5>Consent Acknowledgment</h5>
                        <p>By providing your mobile number and agreeing to receive SMS communications, you acknowledge that you have read, understood, and agree to this SMS Privacy Policy and understand the security limitations of text messaging for healthcare communications.</p>
                        <p>Allen Psychiatry LLC reserves the right to suspend SMS services at any time for maintenance, security, or regulatory compliance purposes.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline" onclick="hideSmsPrivacyModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Force creation of the SMS Privacy Policy modal on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSmsPrivacyModal);
} else {
    createSmsPrivacyModal();
}

// Event delegation for SMS Privacy Policy link
// This will work even if the link is added after the script runs

document.addEventListener('click', function(e) {
    // Only match anchor tags with href exactly '#sms-privacy'
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#sms-privacy') {
        e.preventDefault();
        showSmsPrivacyModal();
        return false;
    }
});

// Add escape key functionality
// Only add once
if (!window._smsPrivacyModalEscapeListener) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideSmsPrivacyModal();
        }
    });
    window._smsPrivacyModalEscapeListener = true;
} 