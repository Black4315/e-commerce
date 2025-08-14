"use client";
import { isMobileUserAgent } from "@/utils/mobileCheck";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export const MobileContext = createContext(false);
export const useMobileCheck = () => useContext(MobileContext);

export const MobileCheckProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue?: boolean;
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(initialValue || false);
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined" || typeof navigator === "undefined")
        return false;
      const ua =
        navigator.userAgent || navigator.vendor || (window as any).opera;
      // checks for iOS, Android, Windows Phone
      return isMobileUserAgent(ua);
    };
    setIsMobile(checkMobile());
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};
