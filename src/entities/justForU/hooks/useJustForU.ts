import fetchApi from "@/lib/fetchApi"
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

export function useJustForU(
  queryKeys: readonly unknown[],
  locale: string,
  brand: string,
  category: string
) {
  return fetchApi<apiRes>(
    queryKeys,
    `/api/best-sellings?category=${category}&brand=${brand}`,
    locale,
    bestSellingsDataSchema
  );
}
