"use client"
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import normalizePath from "./normalizePath";
import { useLocale } from "next-intl";
import { sleep } from "@/lib/sleep";
import { useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

nProgress.configure({ showSpinner: false })
type LinkProps = React.ComponentProps<typeof Link>;
export interface ProgLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    href: string;
    transitionDuration?: number;
    viewTransition?: boolean;
}
const ProgLink: React.FC<ProgLinkProps> = ({ children,
    className,
    href,
    viewTransition,
    onClick,
    transitionDuration = 350, 
    ...props 
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale()

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // e.preventDefault();
        onClick && onClick(e)

        // If already on the same page → do nothing
        if (pathname === normalizePath(href, locale)) return;

        nProgress.start()
        // apply class on body only if viewTransition is true
        viewTransition && document.body.classList.add("page-transition");
        // await sleep(transitionDuration);
        // router.push(href);
    }

    useEffect(() => {
        if (!pathname) return;

        const timeout = setTimeout(() => {
            nProgress.done()
            viewTransition && document.body.classList.remove("page-transition");
        }, transitionDuration);

        return () => clearTimeout(timeout);
    }, [pathname, transitionDuration]);

    return (
        <Link locale={locale} {...props} href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    )
}

export default ProgLink
