"use client"
import Link, { LinkProps } from "next/link";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import normalizePath from "./normalizePath";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { sleep } from "@/lib/sleep";
import { useEffect } from "react";

nProgress.configure({ showSpinner: false })
interface ProgLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    href: string;
    transitionDuration?: number;
}
const ProgLink: React.FC<ProgLinkProps> = ({ children,
    className,
    href,
    transitionDuration = 500, ...props }) => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale()

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        // If already on the same page → do nothing
        if (normalizePath(pathname, locale) === normalizePath(href, locale)) return;

        nProgress.start()
        await sleep(transitionDuration);
        router.push(href);
    }
    
    useEffect(() => {
        if (!pathname) return;

        const timeout = setTimeout(() => {
            nProgress.done()
        }, transitionDuration);

        return () => clearTimeout(timeout);
    }, [pathname, transitionDuration]);

    return (
        <Link {...props} href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    )
}

export default ProgLink
