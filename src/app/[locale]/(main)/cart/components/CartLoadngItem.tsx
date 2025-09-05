import { Skeleton } from "@mui/material";
import React from "react";

const CartLoadngItem = () => {
  return (
    <tr className="tr group">
      <td className="relative overflow-hidden">
        <div className="flex items-center gap-4">
          <Skeleton variant="rectangular" width={72} height={54} />
          <Skeleton width={130} />
        </div>
      </td>

      {Array(5)
        .fill(null)
        .map((_, i) => (
          <td key={i}>
            <Skeleton className={i == 4 ? "ms-auto" : "mx-auto"} width={40} />
          </td>
        ))}
    </tr>
  );
};

export default CartLoadngItem;

CartLoadngItem.mobile = () => (
  <div className="flex  gap-3 py-3 px-2.5 rounded shadowd-[0px_1px_13px_rgba(0,0,0,0.05)]">
    <Skeleton variant="rectangular" width={72} height={72} />
    <div className="flex flex-col justify-start gap-1 w-full max-h-[72px] ">
      <Skeleton width={"100%"} height={20}/>
      <Skeleton width={"40%"} height={20}/>
      <Skeleton width={"40%"} height={20}/>
    </div>
  </div>
);
