'use client';

import useFetchTopOffer from './hooks/useFetchTopOffer';
import Link from 'next/link';
import LocaleSwitcherSelect from './components/LocaleSwitcherSelect';
import FetchErr from './components/FetchErr';

export default function TopHeader({ locale }: { locale: string }) {
  const { data, isLoading, error } = useFetchTopOffer(locale)

  if (isLoading) return;
  if (error) return <FetchErr />;

  return (
    <div role="banner" className="text-text-1 bg-black p-3">
      <div className="screen-max-width flex items-center justify-between w-full font-poppins">

        <p className="flex-1 text-xs sm:text-sm leading-5 tracking-wide md:text-center lg:-mr-20 md:static md:translate-x-0">
          {data.title}
          <Link href={data.link} className="underline font-semibold mx-2">
            ShopNow
          </Link>
        </p>

        <div className="hidden md:block z-10">
          <LocaleSwitcherSelect defaultValue={locale} label="Select a locale" />
        </div>

      </div>
    </div>
  );
}
