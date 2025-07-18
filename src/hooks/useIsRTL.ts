import { useLocale } from "next-intl";

// List of RTL languages
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur', 'ps', 'syr'];

export function useIsRTL() {
    const locale = useLocale();

    // Ensure the locale is valid, and check if it's in the RTL language list
    return RTL_LANGUAGES.includes(locale);
}