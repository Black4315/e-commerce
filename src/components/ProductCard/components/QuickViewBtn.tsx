"use client"
import QuickViewIcon from '@/assets/icons/QuickView'
import Button from '@/components/ui/Button'
import { ProductsImagesPop, ProductsImagesPopMenu } from '@/components/ui/ProductsImagesPop'
import { useRef, useState } from 'react'

const QuickViewBtn = () => {
  const [open, setopen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button onClick={() => setopen(!open)} className="rounded-full w-8.5 h-8.5 bg-white">
        <QuickViewIcon className="w-6 h-6" />
      </Button>

      <ProductsImagesPop open={open} setOpen={setopen}>
        <ProductsImagesPopMenu>
          dddd
        </ProductsImagesPopMenu>
      </ProductsImagesPop>
    </>
  )
}

export default QuickViewBtn