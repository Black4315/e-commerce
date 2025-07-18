"use client"

import { useRef, useState } from "react";
import { SideBar, SideBarBody } from "@/components/ui/SideBar";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import NavBar from "@/components/layout/Header/components/NavBar";
import OpenButton from "./components/OpenButton";
import useNavAnim from "./hooks/useNavAnim";

type SideBarMenuProps = {
    className?: string;
    children?: React.ReactNode;
}
const SideBarMenu = ({ className, children }: SideBarMenuProps) => {
    const [open, setopen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        useNavAnim(open, sidebarRef);

        // Close sidebar when clicking on nav items
        sidebarRef.current?.querySelectorAll(".nav-item").forEach((item) => {
            item.addEventListener("click", () => {
                setopen(false);
            });
        })
    },[open])
    return (
        <div className={cn('', className)}>
            <OpenButton onClick={() => setopen(!open)} />

            <SideBar open={open} setOpen={setopen}>
                <SideBarBody>
                    <div ref={sidebarRef} className="mt-10 w-auto ">
                        <NavBar />
                    </div>
                </SideBarBody>
            </SideBar>
        </div>
    )
}



export default SideBarMenu