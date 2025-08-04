import { useEffect, useState } from "react";
import { CategoryChild } from "../types/CategoryType";

export default function useDropDown(categories: {
    name: string;
    link: string;
    children: CategoryChild[];
}[]) {
    const [active, setActive] = useState<string | null>(null);
    const [hasOpened, setHasOpened] = useState(false);

    const activeItems = categories.find((cat) => cat.link === active)?.children || [];

    useEffect(() => {
        if (active && !hasOpened) {
            setHasOpened(true);
        }
    }, [active, hasOpened]);

    return {
        active,
        setActive,
        hasOpened,
        activeItems,
    }
}