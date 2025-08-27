import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchAndValidate } from "./fetchAndValidate";
import { ZodSchema, infer as zInfer } from "zod";

export default function fetchApi<T>(
  queryKeys: readonly unknown[],
  api: string,
  locale: string,
  schema?: ZodSchema<T>,
  fallback?: T
): UseQueryResult<T> {
  api = api.replace(/\/$/, ""); // Remove trailing slash

  const queryKey = [...queryKeys, locale];

  return useQuery({
    queryKey,
    queryFn: () =>
      fetchAndValidate({
        url: `${api}${
          api.includes("?") ? `&lang=${locale}` : `?lang=${locale}`
        }`,
        schema,
        fallback,
      }),
    select: (data) => data ?? (fallback as T),
  });
}
