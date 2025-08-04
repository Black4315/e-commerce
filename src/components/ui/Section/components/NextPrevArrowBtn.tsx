'use client'
import Icons_arrowleftIcon from "@/assets/icons/icons_arrowleft";
import { cn } from "@/lib/utils";

const NextPrevArrowBtn = ({
  typeBtn,
  id,
  className,
  ...props
}: {
  typeBtn: 'next' | 'prev';
  id?: string;
  className?: string;
} & React.ComponentProps<'button'>) => {
  return (
    <button
      {...props}
      id={id}
      className={cn(`disabled:opacity-75   rtl:rotate-180 w-11.5 h-11.5 bg-secondary-1 transition-all hover:bg-black/10 rounded-full flex-center cursor-pointer`, className)}>
      {typeBtn === 'next' ? <Icons_arrowleftIcon className="rotate-180" /> : <Icons_arrowleftIcon />}
    </button>
  )
}

export default NextPrevArrowBtn