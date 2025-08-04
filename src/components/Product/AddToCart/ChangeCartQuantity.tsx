"use client"

import IcondeleteIcon from "@/assets/icons/icondelete"
import IconminusIcon from "@/assets/icons/iconminus"
import IconplusIcon from "@/assets/icons/iconplus"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const ChangeCartQuantity = ({
  updateQty,
  className,
  quantity: qyt,
  maxQyt
}: {
  updateQty: (quantity: number) => string | void | Promise<void>;
  className?: string;
  quantity: number;
  maxQyt?: number;
}) => {
  const [loadingQyt, setloadingQyt] = useState(false)

  const updateQ = async (val: any) => {
    setloadingQyt(true)

    try {
      await updateQty(val);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    } finally {
      setloadingQyt(false);  // after end promis call this to say that end loading
    }
  }

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation()
    // maxQuantity plus one here to able to send that to promis to check if it can be plus or not
    updateQ(qyt + 1)
  }

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation()
    updateQ(Math.max(qyt - 1, 0))
  }

  return (
    <div className={cn("flex items-center justify-between gap-2 w-1/2 rounded-t-2xl bg-[#262626] box-border p-1.5 mx-auto border", className)}>
      <QuantityBtn
        onClick={handleDecrease}
        aria-label="Decrease quantity"
      >
        {qyt <= 1 ? <IcondeleteIcon className='w-5 ms-px' /> : <IconminusIcon className='w-5 ms-px' />}
      </QuantityBtn>

      {/* input */}
      {loadingQyt ? <div className="w-4 h-4 !rounded-full border-2 border-text-3 border-t-[#222326] animate-spin [animation-duration:0.6s]" />
        : <span className="min-w-[32px] text-center med-text text-text-1">{qyt}</span>}

      <QuantityBtn
        onClick={handleIncrease}
        aria-label="Increase quantity"
        className={(maxQyt ?? 1) <= qyt ? 'opacity-50 brightness-50' : ''}
      >
        <IconplusIcon className='w-5 ms-px' />
      </QuantityBtn>
    </div>
  )
}


/// reuseable btn
export const QuantityBtn = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<'button'>) => {
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!btnRef.current) return;

    btnRef.current.onchange = () => document.startViewTransition
  }, [])
  return (
    <button
      {...props}
      ref={btnRef}
      className={cn("bg-[#0a0a0a] rounded-lg hover:bg-[#0a0a0a]/65 active:scale-95 hover:scale-105 h-full p-2 text-text-1 transition-apple duration-200 flex-center transform-origin-center cursor-pointer", className)}
      role="button"
    >
      {children}
    </button>
  )
}