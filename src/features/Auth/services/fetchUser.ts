import { userSchema, User } from "@/types/userType";

export async function fetchUser(): Promise<User | null> {
  try {
    const res = await fetch(process.env.API_URL+"/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer X9aP4qT7Lm2R`,
      },
      cache: "no-store", // always fresh
    });

    if (res.status === 401) {
      // not logged in
      return null;
    }

    if (!res.ok) {
      console.error("❌ Failed to fetch user:", res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    const parsed = userSchema.safeParse(json);

    if (!parsed.success) {
      console.error("❌ Invalid User API response format", parsed.error);
      return null;
    }

    return parsed.data;
  } catch (err) {
    console.error("fetchUser error:", err);
    return null;
  }
}
