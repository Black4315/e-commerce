import { Skeleton } from "@mui/material"

const LoadingOffers = () => {
  return (
    <div className='pt-4 md:pt-10 lg:ps-10 w-full overflow-hidden md:h-[344px] box-content'>
      <Skeleton variant="rectangular" className="max-lg:rounded-lg" width={'100%'} height={344} />
    </div>
  )
}

export default LoadingOffers