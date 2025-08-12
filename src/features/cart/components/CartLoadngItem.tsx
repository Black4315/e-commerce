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

      {Array(5).fill(null).map((_,i) => (
          <td key={i} >
            <Skeleton className={i==4 ? "ms-auto" :"mx-auto"} width={75} />
          </td>
        ))}
    </tr>
  );
};

export default CartLoadngItem;
