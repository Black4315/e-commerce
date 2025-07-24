'use client';

import Link from "next/link";

const CategoryItem = ({
  id,
  name,
  slug,
  icon: Icon
}: {
  id: number;
  name: string;
  slug: string;
  icon: (props: React.ComponentProps<'svg'>) => React.JSX.Element;
}) => {
  return (
    <Link
      href={'/category/' + slug}
      className="flex-shrink-0 border border-black/30 rounded w-[170px] h-[145px] flex-center flex-col gap-3 md:gap-4 hover:bg-hover-button-2 hover:text-text-1 hover:border-none transition-apple duration-200"
    >
      <Icon className="w-14 h-14" />
      <span className="reg-text capitalize">{name}</span>
    </Link>
  )
}

export default CategoryItem