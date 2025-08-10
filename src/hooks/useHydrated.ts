import { useEffect, useState } from "react";

export function useHydrated() {
    const [hydrated, sethydrated] = useState(false)
    useEffect(() => sethydrated(true), [])
    return { hydrated }
}