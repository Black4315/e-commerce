import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // pathnames: {
    //     // The path to the locale-specific pages
    //     '/contact': {
    //         en: '/contact',
    //         ar: '/اتصل'
    //     },
        
    // },
    // Used when no locale matches
    defaultLocale: 'en'
});
