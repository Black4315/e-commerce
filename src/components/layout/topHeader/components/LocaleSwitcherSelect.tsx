"use client";

import {
  SelectCustom,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCALE_LABELS } from "@/constants";
import { Locale, routing, usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Select } from "@radix-ui/themes";
import { useParams } from "next/navigation";

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
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <SelectCustom defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className={cn('min-w-[80px] max-md:text-xs max-w-fit hover:bg-white/5 transition-all rounded-[2px] select-none flex gap-1 cursor-pointer h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0',className)}
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <Select.Content className="max-md:text-xs">
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {(LOCALE_LABELS[locale].charAt(0).toUpperCase() + LOCALE_LABELS[locale].slice(1)) || locale}
          </SelectItem>
        ))}
        
      </Select.Content>
    </SelectCustom>
  );
}
