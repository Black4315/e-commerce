export type CategoryChild = {
    name: string;
    link: string;
};

export type CategoryType = {
    name: string;
    link: string;
    children: CategoryChild[];
};
