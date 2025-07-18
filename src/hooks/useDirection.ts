export const useDirection = () => {
    if (typeof window === 'undefined') return 'ltr';
    return document?.dir === 'rtl' ? 'rtl' : 'ltr';
}