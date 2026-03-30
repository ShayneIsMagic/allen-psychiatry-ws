/**
 * Sends GA4 events to every configured measurement ID (see config.js AP_GTAG_SEND_TO).
 */
(function () {
    function mergeBase(params) {
        var o = {
            page_location: String(window.location.href),
            page_path: String(window.location.pathname || ''),
            page_title: document.title || ''
        };
        if (params && typeof params === 'object') {
            for (var k in params) {
                if (Object.prototype.hasOwnProperty.call(params, k)) {
                    o[k] = params[k];
                }
            }
        }
        return o;
    }

    window.trackApEvent = function (eventName, params) {
        if (typeof gtag !== 'function') {
            return;
        }
        var payload = mergeBase(params);
        var sendTo = typeof window !== 'undefined' && window.AP_GTAG_SEND_TO;
        if (sendTo && sendTo.length) {
            payload.send_to = sendTo;
        }
        gtag('event', eventName, payload);
    };
})();
