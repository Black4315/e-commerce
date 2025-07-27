"use client";

import { Skeleton } from "@mui/material";

const ErrorProducts = ({ rows }: { rows?: number }) => {
  return (
    <>
      <div className="flex flex-col gap-[30px] mt-4">
        {new Array(rows).fill(null).map((_, i) => (
          <div key={i} className="flex gap-[30px] overflow-hidden px-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rounded"
                width={270}
                height={350}
                sx={{ flexShrink: 0, borderRadius: '12px' }}
              />
            ))}
          </div>
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
