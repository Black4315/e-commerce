import { z } from "zod";

export const BentoGridItemSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    redirect: z.string(),
});

export const NewArrivalSchema = z.object({
    NewArrival: z.array(BentoGridItemSchema),
});

export type BentoGridItemType = z.infer<typeof BentoGridItemSchema>;
export type NewArrival = z.infer<typeof NewArrivalSchema>;
