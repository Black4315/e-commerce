"use client"

import UserIcon from "@/assets/icons/user"
import { MenuWrapper, SelectMenu } from "@/components/ui/SelectMenu"
import React, { useState } from "react"
import ActionNavItem from "./ActionNavItem"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useTranslations } from "next-intl"
import { profileMenuIcons } from "@/constants/constanst"
import Link from "next/link"

const ProfileMenu = () => {
    const [open, setopen] = useState(false)
    
    // locale
    const t = useTranslations('header')
    const profileNav = t.raw('profileMenu') as [];

    const clickOutsideHandler = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (!target.closest('#profile-menu') && open) {
            setopen(false);
        }
    }

    useGSAP(() => anim(open),[open])

    return (

        <ActionNavItem
            href="#"
            title="Profile"
            Icon={UserIcon}
            alt="profile"
            width={28}
            height={28}
            iconClassName='max-sm:!w-6'
            btnClassName={`${open ? 'action-btn-select':''}`}
            onClick={(e) => setopen(!open)}
        >
            <SelectMenu {...{ open, setopen, clickOutsideHandler }}>
                <MenuWrapper id="profile-menu" className={`bg-black/20 backdrop-blur-3xl rounded p-4 w-[208px]`}>
                    <ul className="flex items-start flex-col gap-3">
                        {profileNav.map(({label,link},idx)=>(
                            <li key={idx} className="profile-menu-li leading-5 tracking-wide text-text-1 font-poppins text-sm hover:text-hover-button-1 transition-all cursor-pointer">
                                <Link href={link} onClick={() => setopen(!open)} className="flex items-center gap-2">
                                    {React.createElement(profileMenuIcons[idx], { className: 'w-8' })}
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </MenuWrapper>
            </SelectMenu>
        </ActionNavItem>
    )
}

export default ProfileMenu


const anim = (open:boolean) =>{
    if (open) {
        gsap.fromTo('.profile-menu-li', {
            y: -10,
            opacity: 0,
            scale: 0.95,
        }, {
            y: 0,
            scale: 1,
            delay: 0.2,
            duration: 0.1,
            stagger: { each: 0.1, },
            ease: "power2.in",
            opacity: 1,
        })
    } else {
        gsap.to('.profile-menu-li', {
            y: -10,
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power2.inOut",
            stagger: {
                each: 0.03,
                from: "end",
            },
        })
    }

}