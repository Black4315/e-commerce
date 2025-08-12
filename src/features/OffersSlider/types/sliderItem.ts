import { z } from "zod";

export type SliderItemtype = z.infer<typeof SliderItemSchema>;
export const SliderItemSchema = z.object({
  name: z.string(),
  image: z.string(),
  logo: z.string(),
  offerBody: z.string(),
  link: z.string(), // .url()
});


