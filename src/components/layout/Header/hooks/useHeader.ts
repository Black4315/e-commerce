import { useEffect, useState } from "react";

export function useHeader() {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);

    }, [])
    // Function to handle search
    // This can be passed down to SearchComponent to handle search queries
    const onSearch = (searchTerm: string) => {
        console.log("Search Term:", searchTerm);
    }

    return {
        hydrated,
        onSearch
    }
}