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
  fallback,
}: FetchAndValidateOptions<T>): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch (e) {
    throw new Error(`Network error: failed to reach ${url}`);
  }

  if (!res.ok) {
    const err = new Error(`❌ Network error: ${res.status} ${res.statusText}`);
    (err as any).status = res.status;
    (err as any).name = "HttpError";

    console.error(err.message);
    if (fallback) return fallback;
    throw err;
  }

  const json = await res.json();
  if (!schema) return json;

  const parsed = schema.safeParse(json);

  if (!parsed.success) {
    const err = new Error("❌ Invalid API response format");
    (err as any).name = "ZodError";
    (err as any).error = parsed.error;

    console.error(err.message, (err as any).error);
    if (fallback) return fallback;
    throw err;
  }

  return parsed.data;
}
