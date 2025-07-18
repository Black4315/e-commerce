import { useQuery } from "@tanstack/react-query";


const fetchFunc = async (api: string, locale: string) => {
    const res = await fetch(`${api}?lang=${locale}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
};

export default function fectchApi(querykeys: any[], api: string, locale: string) {
    api = api.replace(/\/$/, ''); // Ensure trailing slash is removed from api if it exists

    // Ensure a unique queryKey for each locale
    const queryKey = [...querykeys, locale];

    return useQuery({
        queryKey,
        queryFn: () => fetchFunc(api, locale),
    });
}
