import { z } from "zod";

export const flashSaleCampaignSchema = z.object({
    campaign: z.object({
        id: z.string(),
        status: z.enum(["active", "expired", "upcoming"]),
        type: z.string(),
        starts_at: z.string(),
        ends_at: z.string(),
        product: z.object({
            id: z.string(),
            name: z.string(),
            short_description: z.string(),
            image: z.string(), //.url(),
            buy_now_url: z.string(), //.url(),
        }),
        labels: z.object({
            category: z.string(),
            countdown: z.object({
                days: z.string(),
                hours: z.string(),
                minutes: z.string(),
                seconds: z.string(),
            }),
        }),
        countdown: z.object({
            enabled: z.boolean(),
            target_time: z.string(),
        }),
        fallback_after_expiry: z.object({
            message: z.string().default("This sale has ended"),
            button: z.string(),
            redirect_url: z.string(), //.url(),
        }),
    }),
});

export type FlashSaleCampaignType = z.infer<typeof flashSaleCampaignSchema>;
