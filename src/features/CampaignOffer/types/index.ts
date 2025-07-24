export type FlashSaleCampaign = {
    campaign: {
        id: string;
        status: "active" | "expired" | "upcoming";
        type: string;
        starts_at: string;
        ends_at: string;
        product: {
            id: string;
            name: string;
            short_description: string;
            image: string;
            buy_now_url: string;
        };
        labels: {
            category: string;
            countdown: {
                days: string;
                hours: string;
                minutes: string;
                seconds: string;
            };
        };
        countdown: {
            enabled: boolean;
            target_time: string;
        };
        fallback_after_expiry: {
            message: string;
            button: string;
            redirect_url: string;
        };
    };
};