import { useEffect, useState } from "react";

export function useMobileCheck() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined" || typeof navigator === "undefined") return false;
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      // Checks for iOS, Android, Windows Phone
      return /android|iphone|ipad|ipod|windows phone/i.test(ua);
    };
    setIsMobile(checkMobile());
  }, []);

  return isMobile;
}