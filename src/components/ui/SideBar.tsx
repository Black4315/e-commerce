"use client";

import { cn } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import LocaleSwitcherSelect from "../layout/topHeader/components/LocaleSwitcherSelect";
import { useLocale } from "next-intl";
import { Portal } from "./Portal";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
  showAnotherContent?: React.ReactNode;
}

// Create a context for the sidebar
// This will hold the open state and a function to toggle it
const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

// Custom hook to use the Sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// SidebarProvider component to provide the context to its children
// It accepts props to control the open state and animation
export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
  showAnotherContent,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
  showAnotherContent?: React.ReactNode;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider
      value={{ open, setOpen, animate, showAnotherContent }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// SideBar component that uses the SidebarProvider
// It can be used to wrap other components that need access to the sidebar state
export const SideBar = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
  showAnotherContent,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
  showAnotherContent?: React.ReactNode;
}) => {
  return (
    <SidebarProvider
      open={openProp}
      setOpen={setOpenProp}
      animate={animate}
      showAnotherContent={showAnotherContent}
    >
      {children}
    </SidebarProvider>
  );
};

// SideBarMenu component that uses the Sidebar context
export const SideBarMenu = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.aside>) => {
  const { open, showAnotherContent, animate } = useSidebar();

  useEffect(() => {
    open
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [open]);

  return (
    <motion.aside
      className={cn(
        "text-white backdrop-blur-xl bg-secondary-1/85 w-svw hidden shrink-0",
        className,
        "h-screen common-padding py-4 fixed top-0 left-0 flex-col overflow-y-auto scrollbar-thin"
      )}
      animate={{
        // width: animate ? (open ? "100vw" : "0") : "100vw",
        left: animate ? (open ? "0" : "-100%") : "0",
        display: open ? "flex" : "none",
      }}
      transition={{
        ease: [0, 0, 0.5, 1],
        duration: 0.3515,
      }}
      {...props}
    >
      <AnimatePresence mode="popLayout">
        {!showAnotherContent && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <SideBarClose />
            {children as any}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        {showAnotherContent && (
          <motion.div
            key="another-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {showAnotherContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

// SideBarClose component that provides a button to close the sidebar
export const SideBarClose = () => {
  const { open, setOpen } = useSidebar();
  const locale = useLocale();

  return (
    <motion.span
      transition={{
        delay: open ? 0.2515 : 0,
        duration: 0.3515,
      }}
      animate={{
        opacity: open ? 1 : 0,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <IoMdClose
          className="text-black w-6 h-6 cursor-pointer text-xl "
          aria-label="Close Sidebar"
          title="Close Sidebar"
          role="button"
          onClick={() => setOpen(false)}
        />
        <LocaleSwitcherSelect
          defaultValue={locale}
          label="Select a locale"
          className="bg-black rounded hover:bg-black/80"
        />
      </div>
    </motion.span>
  );
};

export const SideBarBody = (
  props: React.ComponentProps<typeof motion.aside>
) => (
  <Portal>
    <SideBarMenu {...props} />
  </Portal>
);
