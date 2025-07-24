"use client"

import { Skeleton } from "@mui/material"

const SkeltonProductCard = () => {
  return (
    <div className="flex gap-[30px] overflow-x-hidden p-5 -m-5">
      {new Array(4).fill(null).map((_, i) => (
        <div key={i} className="w-[270px] h-[350px] flex-shrink-0 flex flex-col rounded-xl shadow-[2px_4px_6px_rgba(0,0,0,0.06)] ">
          <Skeleton variant="rectangular" className="rounded-t-xl" width={'100%'} height={262} />

          <div className="flex flex-col gap-1.5 mt-2">
            <Skeleton className="mx-2" height={20} />
            <Skeleton className="mx-2" width="40%" height={20} />
            <Skeleton className="mx-2" width="60%" height={20} />

          </div>
        </div>
      ))}
    </div>
  )
}

export default SkeltonProductCard