import { productType, productTypeSchema } from "@/entities/Product/types/productType";
import z from "zod";

export type WishlistItem = {
  userId?: string | number | null; // Optional, as a guest might not have a userId
} & productType;

export const wishlistSchema = z.object({
  userId: z.union([z.number(), z.string(), z.null(), z.undefined()]),
  ...productTypeSchema.shape,
});