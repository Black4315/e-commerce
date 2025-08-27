"use client"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"


const NavBar = () => {
    const t = useTranslations('header')
    const nav = t.raw('nav') as { label: string; link: string }[];
    const pathname = usePathname()

    const locale = pathname.split('/')[1]
    const normPath = pathname.replace(`/${locale}`, '') || '/';

    return (
        <nav className="flex lg:items-center nav gap-6 lg:gap-12 max-lg:flex-col">
            {nav.map((item, idx) => (
                <Link
                    key={idx}
                    href={item.link}
                    className={`text-black w-fit max-lg:!text-lg font-semibold lg:font-medium nav-item motion-border-b ${item.link === normPath ? 'after:w-[105%]' : ''}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>

    )
}

export default NavBar