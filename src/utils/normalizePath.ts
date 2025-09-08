import { Url, UrlObject } from "url";

/**
 * Normalize Path and return clean path without "locale"
 * @param path 
 * @param locale 
 * @returns string | UrlObject
 */
export default function normalizePath(path: string | UrlObject, locale: string): string | UrlObject{
    if (!path) return path;
    const parts = path.toString().split("/");
    // If first segment is a supported locale, drop it
    if (locale === parts[1]) {
        return "/" + parts.slice(2).join("/");
    }
    return path;
}