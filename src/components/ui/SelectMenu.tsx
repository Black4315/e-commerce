import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";

type SelectMenuContext = {
    open: boolean;
    setOpen: (open: boolean) => void;
    clickOutsideHandler: (event: MouseEvent) => void;
}

const SelectMenuContext = createContext<SelectMenuContext | undefined>(undefined)

export const useSelectMenuContext = () => {
    const context = useContext(SelectMenuContext)

    if (context === undefined) {
        throw new Error('useSelectMenuContext must only use in SelectMenuProvider')
    }
    return context
}

export const SelectMenuProvider = ({
    open: openProp,
    setOpen: setOpenProp,
    clickOutsideHandler,
    children
}: {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    clickOutsideHandler: (event: MouseEvent) => void;
    children: React.ReactNode
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        <SelectMenuContext.Provider value={{ open, setOpen, clickOutsideHandler }}>
            {children}
        </SelectMenuContext.Provider>
    )
}

export const SelectMenu = ({
    open,
    setOpen,
    clickOutsideHandler,
    children
}: {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    clickOutsideHandler: (event: MouseEvent) => void;
    children: React.ReactNode
}) => (
    <SelectMenuProvider open={open} setOpen={setOpen} clickOutsideHandler={clickOutsideHandler}>
        {children}
    </SelectMenuProvider>
)

export const Menu = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof motion.div>) => {
    const { open, setOpen, clickOutsideHandler } = useSelectMenuContext();

    // useEffect(() => {
    //     open ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
    // }, [open])

    useEffect(() => {
        document.addEventListener('click', clickOutsideHandler);
        return () => {
            document.removeEventListener('click', clickOutsideHandler);
        };
    }, [open]);

    return (
        <div className="relative">
            <motion.div
                transition={{
                    duration: 0.2, 
                    ease: [0.4, 0, 0.6, 1],
                }}
                animate={{
                    y: open ? 0 : -10,
                    scale: open ? 1 : 0.95,
                    opacity: open ? 1 : 0,
                    display: open ? 'block' : 'none'
                }}
                className={cn('origin-[top_var(--origin-dir)] hidden z-99 absolute end-0 mt-2 w-48 bg-white rounded-md shadow-lg ', className)}
                {...props}
            >
                {children}
            </motion.div>
        </div>
    )

}

export const MenuWrapper = (props: React.ComponentProps<typeof motion.div>) => (
    <Menu {...props} />
)