
export const gtag = (...args) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
};

// tracking page view
export const trackPageView = () => {
    gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
    });
};

// tracking URL parameters (e.g. utm_source, utm_medium)
export const trackUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search); // export url query param
    const utmSource = urlParams.get('utm_source');  // utm_source param value
    const utmMedium = urlParams.get('utm_medium');  // utm_medium param value
    const utmCampaign = urlParams.get('utm_campaign');  // utm_campaign param value

    // if parameter exists, send event to GA4
    if (utmSource || utmMedium || utmCampaign) {
        gtag('event', 'utm_params', {
            'utm_source': utmSource,
            'utm_medium': utmMedium,
            'utm_campaign': utmCampaign,
            'page_path': window.location.pathname,
        });
    }
};