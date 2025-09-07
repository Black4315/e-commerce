import fetchApi from "@/lib/fetchApi";

export function useFetchCats(locale: string) {
  return fetchApi(["category"], "/api/categories", locale);
}
