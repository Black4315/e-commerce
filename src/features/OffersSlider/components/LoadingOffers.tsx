import { Skeleton } from "@mui/material"

const LoadingOffers = () => {
  return (
    <div className="md:ps-6 pt-4 sm:pt-6 lg:pt-10 lg:ps-10  w-full overflow-hidden md:h-[344px] box-content">
      <Skeleton
        variant="rectangular"
        className="rounded-lg"
        width={"100%"}
        height={344}
      />
    </div>
  );
}

export default LoadingOffers