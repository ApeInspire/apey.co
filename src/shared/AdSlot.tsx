import { useEffect, useRef, useState } from "react";
import { AD_CONFIG, type AdSlotId } from "./adConfig";

interface AdSlotProps {
  slot: AdSlotId;
  className?: string;
}

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!AD_CONFIG.enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!AD_CONFIG.enabled) return null;

  return (
    <div
      ref={ref}
      data-ad-slot={slot}
      className={`ad-slot ${className}`}
    >
      {visible && <AdContent slot={slot} />}
    </div>
  );
}

function AdContent({ slot }: { slot: AdSlotId }) {
  switch (AD_CONFIG.provider) {
    case "adsense":
      return <AdSenseUnit slot={slot} />;
    case "ethicalads":
      return <EthicalAdsUnit />;
    case "carbon":
      return <CarbonUnit />;
    default:
      return <PlaceholderAd />;
  }
}

function AdSenseUnit({ slot }: { slot: AdSlotId }) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      const w = window as unknown as Record<string, unknown[]>;
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // AdSense script not loaded yet
    }
  }, []);

  if (!AD_CONFIG.adsense) return null;

  return (
    <ins
      ref={ref}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={AD_CONFIG.adsense.client}
      data-ad-slot={AD_CONFIG.adsense.slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-layout-key={slot === "tool-banner" ? "-gw-3+1f-3d+2z" : undefined}
    />
  );
}

function EthicalAdsUnit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !AD_CONFIG.ethicalads) return;
    const script = document.createElement("script");
    script.src = "https://media.ethicalads.io/media/client/ethicalads.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      data-ea-publisher={AD_CONFIG.ethicalads?.placement}
      data-ea-type="text"
      data-ea-style="light"
    />
  );
}

function CarbonUnit() {
  useEffect(() => {
    if (!AD_CONFIG.carbon) return;
    const script = document.createElement("script");
    script.src = `https://cdn.carbonads.com/carbon.js?serve=${AD_CONFIG.carbon.serve}&placement=${AD_CONFIG.carbon.placement}`;
    script.id = "_carbonads_js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.getElementById("_carbonads_js")?.remove();
    };
  }, []);

  return <div id="carbonads-placeholder" />;
}

function PlaceholderAd() {
  return (
    <div className="flex items-center justify-center h-20 bg-bg-secondary border border-dashed border-border rounded-lg text-xs text-text-secondary">
      Ad space reserved
    </div>
  );
}
