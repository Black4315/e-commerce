"use client";

import {
  SelectItem,
} from "@/components/ui/select";
import SwitcherSelect from "@/components/ui/SwitcherSelect";
import { LOCALE_LABELS } from "@/constants";
import { Locale, routing, usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import nProgress from "nprogress";

type Props = {
  defaultValue: string;
  label: string;
  className?: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label, className }: Props) {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  // Handle locale change
  function onSelectChange(nextLocale: string) {
    nProgress.start()
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <SwitcherSelect
      defaultValue={defaultValue}
      onSelectChange={onSelectChange}
      label={label}
      className={className}
    >

      {routing.locales.map((locale) => (
        <SelectItem key={locale} value={locale}>
          {(LOCALE_LABELS[locale].charAt(0).toUpperCase() + LOCALE_LABELS[locale].slice(1)) || locale}
        </SelectItem>
      ))}
    </SwitcherSelect>
  );
}
