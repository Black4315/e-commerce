import { productType, productTypeSchema } from "@/types/productType";
import z from "zod";


export type flashSalesContextType = {
    flashEnd: boolean;
    setFlashEnd: React.Dispatch<React.SetStateAction<boolean>>
}

export type flashDataType = z.infer<typeof flashDataSchema>

export const flashDataSchema = z.object({
    flashSale: z.object({
        start: z.string(),
        end: z.string(),
        viewAll: z.string(),
        products: z.array(productTypeSchema)
    })
})

