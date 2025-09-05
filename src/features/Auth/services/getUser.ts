"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { User, userSchema } from "@/types/userType";
import { fetchUser } from "./fetchUser";

// A professional getUser service
export async function getUser(): Promise<
  { success: true; user: User } | { success: false; error: string }
> {
  try {
    // Example: get session token from cookies
    const cookieStore = cookies();
    // TODO: Replace with acutal token
    const token = "valid-token"; //(await cookieStore).get("session_token")?.value;

    if (!token) {
      return { success: false, error: "No session token found" };
    }

    // TODO: Replace with your real DB or auth provider
    const dbUser = await fakeDbFindUserByToken(token);

    if (!dbUser) {
      return { success: false, error: "User not found" };
    }

    // Validate with Zod schema
    const parsed = userSchema.safeParse(dbUser);

    if (!parsed.success) {
      return { success: false, error: "Invalid user data" };
    }

    return { success: true, user: parsed.data };
  } catch (err) {
    console.error("getUser error:", err);
    return { success: false, error: "Internal server error" };
  }
}

// Example mock db fetch
async function fakeDbFindUserByToken(token: string) {
  const user = await fetchUser();
  if (token === "valid-token") {
    return user
  }
  return null;
}
