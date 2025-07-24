"use client"
import QuickViewIcon from '@/assets/icons/QuickView'
import Button from '@/components/ui/Button'

const QuickViewBtn = () => {
  return (
    <Button className="rounded-full w-8.5 h-8.5 bg-white">
      <QuickViewIcon className="w-6 h-6" />
    </Button>
  )
}

export default QuickViewBtn