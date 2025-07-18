import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export type Locale = (typeof routing.locales)[number];
export {routing};
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);