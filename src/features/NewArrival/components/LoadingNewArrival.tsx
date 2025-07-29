import { BentoGrid, BentoLoadingSkeleton } from '@/components/ui/bento-grid'
import React from 'react'

const LoadingNewArrival = () => {
  return (
   <BentoGrid>
      <BentoLoadingSkeleton />
   </BentoGrid>
  )
}

export default LoadingNewArrival

