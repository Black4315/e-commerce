import { BentoGrid, BentoLoadingSkeleton } from '@/components/ui/bento-grid';
import React from 'react'

const ErrorNewArrival = ({ refetch }: { refetch: () => void; className?: string; }) => {
  return (
    <>
      <BentoGrid>
        <BentoLoadingSkeleton />
      </BentoGrid>
      <div className="text-center mt-6 text-sm text-neutral-500 dark:text-neutral-400">
        <strong className="text-red-500">Oops!</strong> Something went wrong while loading products.
        Please try again shortly.
      </div>
    </>
  )
}

export default ErrorNewArrival