"use client"

import UserIcon from "@/assets/icons/user"
import { MenuWrapper, SelectMenu } from "@/components/ui/SelectMenu"
import React, { useState } from "react"
import ActionNavItem from "./ActionNavItem"
import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"
import { profileMenuIcons } from "@/constants/constanst"
import Link from "next/link"
import { anim } from "../utils/profileLiAnim"

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
            title={ t('tooltip.profile') }
            Icon={UserIcon}
            alt="profile"
            width={28}
            height={28}
            iconClassName='max-sm:!w-6'
            btnClassName={`${open ? 'action-btn-select':''}`}
            onClick={(e) => setopen(!open)}
        >
            <SelectMenu {...{ open, setopen, clickOutsideHandler }}>
                <MenuWrapper id="profile-menu" className={`bg-black/20 backdrop-blur-3xl rounded p-4 w-[225px]`}>
                    <ul className="flex items-start flex-col gap-3">
                        {profileNav.map(({label,link},idx)=>(
                            <li key={idx} className="profile-menu-li leading-5 tracking-wide text-text-1 font-poppins text-sm hover:text-hover-button-1 transition-colors cursor-pointer">
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


