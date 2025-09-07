"use client";

import Link, { LinkProps } from "next/link";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import normalizePath from "./normalizePath";
import { sleep } from "@/lib/sleep";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    href: string;
    transitionDuration?: number; // in ms, default: 500
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    className,
    transitionDuration = 500,
    ...props
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale()

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        // If already on the same page → do nothing
        if (normalizePath(pathname, locale) === normalizePath(href, locale)) return;

        // Add transition class 
        document.body.classList.add("page-transition");

        // Wait for transition out
        await sleep(transitionDuration);

        // Navigate
        router.push(href);
    };

    useEffect(() => {
        if (!pathname) return;

        const timeout = setTimeout(() => {
            document.body.classList.remove("page-transition");
        }, transitionDuration);

        return () => clearTimeout(timeout);
    }, [pathname, transitionDuration]);

    return (
        <Link {...props} href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    );
};
