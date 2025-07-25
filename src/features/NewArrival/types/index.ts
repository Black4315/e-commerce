export interface BentoGridItemType {
    id: number;
    title: string;
    description: string;
    image: string;
    redirect: string;
}

export interface NewArrival {
    NewArrival: BentoGridItemType[];
}