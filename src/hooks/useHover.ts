import { useMobileCheck } from "@/contexts/MobileCheckContext"; 

export function useHover(className: string) {
    const isMobile = useMobileCheck();
    const computedClassName = isMobile ? `active:${className}` : `hover:${className}`;
    return computedClassName;
}