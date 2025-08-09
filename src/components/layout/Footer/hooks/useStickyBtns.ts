import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function useStickyBtns() {
    const footerRef = useRef(null);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                setHide(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    return {
        hide,
        footerRef
    }
}