import { ZodSchema } from "zod";

type FetchAndValidateOptions<T> = {
    schema?: ZodSchema<T>;
    url: string;
    init?: RequestInit;
    fallback?: T;
};

export async function fetchAndValidate<T>({
    schema,
    url,
    init,
    fallback
}: FetchAndValidateOptions<T>): Promise<T> {
    const res = await fetch(url, init);

    if (!res.ok) {
        console.error(`❌ Network error: ${res.status} ${res.statusText}`);
        if (fallback) return fallback;
        throw new Error("Network error");
    }

    const json = await res.json();
    if(!schema) return json

    const parsed = schema.safeParse(json);

    if (!parsed.success) {
        console.error("❌ Invalid API response format", parsed.error);
        if (fallback) return fallback;
        throw new Error("Invalid API response format");
    }

    return parsed.data;
}
