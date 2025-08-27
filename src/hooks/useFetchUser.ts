// hooks/useFetchUser.ts
import { useQuery } from "@tanstack/react-query";
import { User, userSchema } from "@/types/userType";

export async function fetchUser(): Promise<User | null> {
  const res = await fetch("/api/user", {
    method: "GET",
    headers: { Authorization: `Bearer X9aP4qT7Lm2R` },
    cache: "no-store", // no stale cache
  });

  if (res.status === 401) {
    // not logged in
    return null;
  }

  if (!res.ok) throw new Error("Failed to fetch user data");

  const json = await res.json();
  const parsed = userSchema.safeParse(json);

  if (!parsed.success) {
    console.error("❌ Invalid User API response format", parsed.error);
    return null; // safe fallback
  }

  return parsed.data;
}

export default function useFetchUser() {
  return useQuery<User | null, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // 5 min
    retry: false, // don’t spam retry if unauthorized
  });
}
