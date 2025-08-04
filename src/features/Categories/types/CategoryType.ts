export type CategoryChild = {
    label?: boolean;
    name: string;
    link?: string;
};

export type CategoryType = {
    name: string;
    link: string;
    children: CategoryChild[];
};
