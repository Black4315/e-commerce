"use client";

import { cn } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import LocaleSwitcherSelect from "../layout/topHeader/components/LocaleSwitcherSelect";
import { useLocale } from "next-intl";

interface SidebarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    animate: boolean;
}


const ProductsImagesPopContext = createContext<SidebarContextProps | undefined>(undefined);

export const useProductsImagesPop = () => {
    const context = useContext(ProductsImagesPopContext);
    if (!context) {
        throw new Error("useSidebar must be used within a ProductsImagesPopProvider");
    }
    return context;
};


// ProductsImagesPopProvider component to provide the context to its children
// It accepts props to control the open state and animation
export const ProductsImagesPopProvider = ({ children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        <ProductsImagesPopContext.Provider value={{ open, setOpen, animate: animate, }}>
            {children}
        </ProductsImagesPopContext.Provider>
    );
};


// ProductsImagesPop component that uses the ProductsImagesPopProvider
// It can be used to wrap other components that need access to the sidebar state
export const ProductsImagesPop = ({ children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {


    return (
        <ProductsImagesPopProvider open={openProp} setOpen={setOpenProp} animate={animate}>
            {children}
        </ProductsImagesPopProvider>
    );
}


// ProductsImagesPopMenu component that uses the Sidebar context
export const ProductsImagesPopMenu = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof motion.aside>) => {
    const { open, setOpen, animate } = useProductsImagesPop();

    useEffect(() => {
        open ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
    }, [open])

    return (
        <motion.aside
            className={cn(
                "z-99 h-full common-padding py-4 fixed top-0 left-0 flex-col text-white bg-neutral-100/97 w-svw hidden shrink-0",
                className)
            }
            animate={{
                // width: animate ? (open ? "100vw" : "0") : "100vw",
                // left: animate ? (open ? '0' : '-100%') : '0',
                display: open ? "flex" : "none",
            }}
            {...props}
        >
            <>
                <ProductsImagesPopClose />
                {children}
            </>
        </motion.aside>
    );
}

// ProductsImagesPopClose component that provides a button to close the sidebar
export const ProductsImagesPopClose = () => {
    const { open, setOpen } = useProductsImagesPop();
    const locale = useLocale()

    return (
        <motion.span
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
}

export const ProductsImagesPopBody = (props: React.ComponentProps<typeof motion.aside>) => (
    <ProductsImagesPopMenu {...props} />
)


