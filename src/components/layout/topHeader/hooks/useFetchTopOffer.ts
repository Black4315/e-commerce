import { useQuery } from "@tanstack/react-query";

const fetchOffer = async (locale: string) => {
    const res = await fetch(`/api/top-offer?lang=${locale}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
};
  

export default function useFetchTopOffer(locale: string) {
    return useQuery({
        queryKey: ['offer', locale],
        queryFn: () => fetchOffer(locale),
    });
}