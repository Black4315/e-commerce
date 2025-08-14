"use client";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  const isMobile = useMobileCheck();
  return (
    <button
      role="button"
      className={cn(
        `w-10 h-10 ${
          isMobile
            ? "active:bg-hover-button-2 active:text-text-1"
            : "hover:bg-hover-button-2 hover:text-text-1"
        } cursor-pointer flex items-center justify-center transition-all flex-none order-2 flex-grow-0 rounded selected:bg-button-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
