import fectchApi from "@/lib/fectchApi";
import { productTypeSchema } from "@/entities/Product/types/productType";
import z from "zod";

type apiRes = z.infer<typeof bestSellingsDataSchema>;

export const bestSellingsDataSchema = z.object({
  bestSellings: z.object({
    bestSellingsIn: z.string(),
    viewAll: z.string(),
    products: z.array(productTypeSchema),
  }),
});

export function useJustForU(locale: string, brand: string, category: string) {
  return fectchApi<apiRes>(
    ["just-for-you"],
    `/api/best-sellings?category=${category}-laptops&brand=${brand}`,
    locale,
    bestSellingsDataSchema
  );
}
