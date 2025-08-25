"use client";

import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string; // optional aria-label override
}

export default function 
Button2({
  className,
  children,
  ariaLabel,
  ...props
}: ButtonProps) {
  const isMobile = useMobileCheck();

  return (
    <button
      aria-label={ariaLabel}
      role="button"
      className={cn(
        `py-3 reg-text sm:py-4 px-8 sm:px-12 cursor-pointer flex-center transition-all disabled:opacity-50 disabled:pointer-events-none
         flex-none order-2 flex-grow-0 rounded selected:bg-button-2 border border-inactive 
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`,
        isMobile
          ? "active:bg-hover-button-2 active:text-text-1 active:border-transparent"
          : "hover:bg-hover-button-2 hover:text-text-1 hover:border-transparent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
