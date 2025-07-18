'use client'
import Icons_arrowleftIcon from "@/assets/icons/icons_arrowleft";
import IconsarrowrightIcon from "@/assets/icons/iconsarrowright";
import { cn } from "@/lib/utils";

const NextPrevArrowBtn = ({
  type,
  id,
  clasName,
  ...props
}: {
  type: 'next'|'prev';
  id?: string;
  clasName?: string;
} & React.ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      id={id}
      className={cn("w-11.5 h-11.5 bg-secondary-1 transition-all hover:bg-black/10 rounded-full flex-center cursor-pointer", clasName)}>
      {type === 'next' ? <IconsarrowrightIcon /> : <Icons_arrowleftIcon />}
    </div>
  )
}

export default NextPrevArrowBtn