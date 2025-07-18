import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/userType';

export async function fetchUser(): Promise<User> {
    const res = await fetch('/api/user', {
        method: 'GET',
        headers: { Authorization: `Bearer X9aP4qT7Lm2R` },
        cache: 'no-cache', // Ensure fresh data
    });
    if (!res.ok) throw new Error('Failed to fetch user data');
    return res.json();
}

export default function useFetchUser() {
    return useQuery<User, Error>({
        queryKey: ['user'],
        queryFn: fetchUser,
        // staleTime: 1000 * 60 * 5, // 5 minutes
        // cacheTime: 1000 * 60 * 10, // 10 minutes
    });
}
