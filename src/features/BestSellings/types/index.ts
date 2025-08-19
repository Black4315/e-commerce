import { productTypeSchema } from "@/entities/Product/types/productType";
import z from "zod";

export type bestSellingsDataType = z.infer<typeof bestSellingsDataSchema>;

export const bestSellingsDataSchema = z.object({
  bestSellings: z.object({
    bestSellingsIn: z.string(),
    viewAll: z.string(),
    products: z.array(productTypeSchema),
  }),
});
