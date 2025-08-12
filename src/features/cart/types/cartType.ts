import { productTypeSchema, sizeSchema, variantSchema } from "@/types/productType";
import z from "zod";

// CartItem schema
export const cartItemSchema = z
  .object({
    userId: z.union([z.number(), z.string(), z.null(), z.undefined()]),
    canSaveForLater: z.boolean().optional(),
    sync: z.boolean().optional(),
    persistent: z.boolean().optional(),
    selectedVariant: variantSchema,
    selectedSize: sizeSchema,
    quantity: z.number(),
  })
  .merge(productTypeSchema);

export type CartItem = z.infer<typeof cartItemSchema>;