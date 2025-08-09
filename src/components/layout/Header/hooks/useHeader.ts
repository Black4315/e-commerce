import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useHeader(){
    const pathname = usePathname()
    const [hydrated, setHydrated] = useState(false);
    const isNavActions = !pathname.includes('auth')

    useEffect(()=>{
        setHydrated(true);
        
    },[])
    // Function to handle search
    // This can be passed down to SearchComponent to handle search queries
    const onSearch = (searchTerm: string) => {
        console.log("Search Term:", searchTerm);
    }

    return {
        hydrated,
        isNavActions,
        onSearch
    }
}