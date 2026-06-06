import { useState, useEffect } from "react";
import { ANALYTICS_CONFIG } from "./analyticsConfig";
import { hasConsent, setConsent } from "./analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (ANALYTICS_CONFIG.enabled && ANALYTICS_CONFIG.requireConsent && !hasConsent()) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent(false);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-2xl mx-auto bg-bg border border-border rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-text-secondary flex-1">
          We use privacy-friendly analytics to understand which tools are useful.
          No personal data, no tracking across sites.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-bg-secondary transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
