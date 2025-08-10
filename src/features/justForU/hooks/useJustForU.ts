import fectchApi from "@/lib/fectchApi";
import { productType } from "@/types/productType";

type apiRes = {
    bestSellings:{
        products:productType[]
    }
}
export function useJustForU(locale: string, brand: string, category: string) {
    return fectchApi<apiRes>(['just-for-you'], `/api/best-sellings?category=${category}-laptops&brand=${brand}`, locale)
}