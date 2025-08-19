import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { z } from "zod"; // Zod import
import { productType, productTypeSchema } from "@/entities/Product/types/productType";

export async function GET(req: Request, context: { params: { handle: string } }) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("lang") || "en";
  const { handle } = await context.params;

  const filePath = path.join(
    process.cwd(),
    "data",
    "products",
    `${locale}.json`
  );

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(data);

    // Validate the data with Zod
    const result = z.array(productTypeSchema).safeParse(parsedData);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data format", details: result.error },
        { status: 400 }
      );
    }

    // Now we know parsedData is a valid array of products
    const filtered = result.data.filter((item: productType) => item.handle === handle);

    if (filtered.length === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(filtered[0]);
  } catch (e) {
    return NextResponse.json(
      { error: "Translation not found" },
      { status: 404 }
    );
  }
}
