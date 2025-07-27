'use client'

import Icons_arrowupIcon from "@/assets/icons/icons_arrowup"
import ActionsNav from "@/components/layout/Header/components/ActionsNav"
import { useStickyBtns } from "./hooks/useStickyBtns"

const StickyBtns = ({ hide }: { hide: boolean }) => {
    const {
        showBtns,
        animateW,
        animateC
    } = useStickyBtns()


    return (
        <>
            <ul className={`fixed bottom-2 start-2 sm:bottom-3 sm:start-3 lg:bottom-8 lg:start-8 z-99 flex flex-col gap-4 bg-white/80 backdrop-blur-[2px] border-border border rounded-xl py-2 px-1 md:py-3 md:px-2
            transition-apple duration-200 ${hide || !showBtns ? "translate-y-32 opacity-0 pointer-events-none" : ""
            }`}>
                <ActionsNav.wishList tooltip={false} iconClassName={`${animateW && 'animate__heart'}`} />
                <ActionsNav.cart tooltip={false} iconClassName={`${animateC && 'animate_cartBump'}`} />
            </ul>

            <div
                onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-2 end-2 sm:bottom-3 sm:end-3 lg:bottom-8 lg:end-8 z-99 w-11 h-11 flex-center border-border bg-secondary-1 hover:bg-[#e1e1e1] transition-all rounded-full cursor-pointer transition-apple duration-200 ${hide || !showBtns ? "translate-y-32 opacity-0 pointer-events-none" : ""}`}>
                <Icons_arrowupIcon />
            </div>
        </>
    )
}

export default StickyBtns