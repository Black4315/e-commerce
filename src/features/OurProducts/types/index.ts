import { productTypeSchema } from "@/entities/Product/types/productType";
import z from "zod";

export type ourProductsType = z.infer<typeof ourProductsTypeSchema>;

export const ourProductsTypeSchema = z.object({
  ourProducts: z.object({
    viewAll: z.string(),
    products: z.array(productTypeSchema),
  }),
});
