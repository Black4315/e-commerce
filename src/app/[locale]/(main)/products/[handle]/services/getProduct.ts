import { productTypeSchema } from "@/entities/Product/types/productType";
import { fetchAndValidate } from "@/lib/fetchAndValidate";
import { notFound } from "next/navigation";

export async function getProduct(locale: string, handle: string) {
  try {
    const product = await fetchAndValidate({
      url: `${process.env.API_URL}/products/${handle}?lang=${locale}`,
      schema: productTypeSchema,
    });

    return product;

  } catch (err: any) {

    // 404 specifically
    if (err.status === 404) {
      notFound(); 
    }

    // schema validation errors
    if (err.name === "ZodError") {
      console.error("Schema mismatch:", err.errors);
      throw new Error("Invalid API response");
    }

    // fetch/network errors
    console.error("Unexpected fetch error:", err);
    throw new Error("Failed to load product"); // Will go to error.tsx
  }

}
