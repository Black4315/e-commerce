"use client";

import { Skeleton } from "@mui/material";

const ErrorProducts = () => {
  return (
    <>
      <div className="flex gap-6 overflow-hidden mt-4 px-2 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton
            key={i}
            variant="rounded"
            width={270}
            height={350}
            sx={{ flexShrink: 0, borderRadius:'12px' }}
          />
        ))}
      </div>

      <div className="text-center mt-6 text-sm text-neutral-500 dark:text-neutral-400">
        <strong className="text-red-500">Oops!</strong> Something went wrong while loading products.
        Please try again shortly.
      </div>
    </>
  );
};

export default ErrorProducts;
