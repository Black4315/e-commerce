import { useMobileCheck } from "./useMobileCheck";

export function useHover(className: string) {
    const isMobile = useMobileCheck();
    const computedClassName = isMobile ? `active:${className}` : `hover:${className}`;
    return `active:${className}`;
}