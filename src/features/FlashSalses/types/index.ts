import { productType } from "@/types/productType";

export type flashDataType = {
    flashSale: {
        start: string;
        end: string;
        viewAll: string;
        products: productType[];
    };
};

export type flashSalesContextType = {
    flashEnd: boolean;
    setFlashEnd: React.Dispatch<React.SetStateAction<boolean>>
}