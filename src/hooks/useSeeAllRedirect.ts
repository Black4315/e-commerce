import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useUserContext } from "@/contexts/UserContext";

type SectionType = "just-for-you" | "flash-sales" | "category" | "related-items";

export function useSeeAllRedirect() {
    const router = useRouter();
    const locale = useLocale();
    const { isLoggedIn } = useUserContext();

    return (
        section: SectionType,
        options?: { categorySlug?: string; brandSlug?: string }
    ) => {
        let targetUrl = `/${locale}/products`;

        switch (section) {
            case "just-for-you":
                targetUrl = isLoggedIn
                    ? `/${locale}/products/recommended`
                    : `/${locale}/products/trending`;
                break;

            case "flash-sales":
                targetUrl = `/${locale}/flash-sales`;
                break;

            case "category":
                if (options?.categorySlug) {
                    targetUrl = `/${locale}/products?category=${encodeURIComponent(
                        options.categorySlug
                    )}`;
                }
                break;

            case "related-items":
                const params = new URLSearchParams();
                if (options?.categorySlug) {
                    params.set("category", options.categorySlug);
                }
                if (options?.brandSlug) {
                    params.set("brand", options.brandSlug);
                }
                targetUrl = `/${locale}/products?${params.toString()}`;
                break;
        }

        router.push(targetUrl);
    };
}
