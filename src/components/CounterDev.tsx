import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

/**
 * Counter.dev analytics integration.
 * Set your counter.dev ID in src/data/siteConfig.ts
 * Sign up at https://counter.dev to get your ID.
 */
const CounterDev = () => {
  useEffect(() => {
    if (!siteConfig.counterDevId) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.counter.dev/script.js";
    script.setAttribute("data-id", siteConfig.counterDevId);
    script.setAttribute("data-utcoffset", String(new Date().getTimezoneOffset() / -60));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default CounterDev;
