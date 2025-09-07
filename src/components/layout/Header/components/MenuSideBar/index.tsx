"use client";

import { useEffect, useRef, useState } from "react";
import { SideBar, SideBarBody } from "@/components/ui/SideBar";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import NavBar from "@/components/layout/Header/components/NavBar";
import OpenButton from "./components/OpenButton";
import useNavAnim from "./hooks/useNavAnim";
import CategoriesNav from "./components/CategoriesNav";

type SideBarMenuProps = {
  className?: string;
  children?: React.ReactNode;
};
const SideBarMenu = ({ className, children }: SideBarMenuProps) => {
  const [open, setopen] = useState(false);
  const [showAnotherContent, setshowAnotherContent] = useState<any>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    useNavAnim(open, sidebarRef);

    // Close sidebar when clicking on nav items
    sidebarRef.current?.querySelectorAll(".nav-link").forEach((item) => {
      item.addEventListener("click", () => setopen(false));
    });
  }, [open, showAnotherContent]);
  return (
    <div className={cn("", className)}>
      <OpenButton onClick={() => setopen(!open)} />

      <SideBar
        open={open}
        setOpen={setopen}
        showAnotherContent={showAnotherContent}
      >
        <SideBarBody className="pt-6" ref={sidebarRef}>
          <div className="mt-10 w-auto ">
            <NavBar />
            <CategoriesNav setshowAnotherContent={setshowAnotherContent} />
          </div>
        </SideBarBody>
      </SideBar>
    </div>
  );
};

export default SideBarMenu;
