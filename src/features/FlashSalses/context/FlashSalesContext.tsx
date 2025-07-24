import { createContext, ReactNode, useContext, useState } from "react";
import { flashSalesContextType } from "../types";

// flash sales context to pass some state like flashEnd? to grand children
export const FlashSalesContext = createContext<flashSalesContextType | undefined>(undefined)

export const useFlashSalesContext = () => {
    const context = useContext(FlashSalesContext);
    if (context == undefined) throw new Error('useFlashSalesContext must used inside FlashSalesProvider')
    return context
}

export const FlashSalesProvider = ({ children }: {
    children: ReactNode;
}) => {

    const [flashEnd, setFlashEnd] = useState(false)

    return (
        <FlashSalesContext.Provider value={{ flashEnd, setFlashEnd }}>
            {children}
        </FlashSalesContext.Provider>
    )
}