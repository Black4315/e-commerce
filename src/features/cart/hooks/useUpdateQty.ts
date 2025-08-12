// import { useEffect, useState } from "react";
// import { useCartContext } from "../contexts/CartContext";

// export function useUpdateQty(quanity?: number,id?:number) {
//   const [qty, setqty] = useState(1);
//   const { cart, updateQuantity } = useCartContext();

//   useEffect(() => {
//     setqty(quanity || 1);
//   }, [cart]);

//   /**
//    * prefrom quanity update
//    *
//    */
//   const performQyt = async (val: number) => {
//     if (!id) throw new Error("No item with this id");

//     await new Promise((r) => setTimeout(r, 400));

//     setqty(val);
//     updateQuantity(id, val, variant, size?.size);
//   };
//   /**
//    *  Update qty with toast message
//    */
//   const updateQty = (val: number) => {
//     if (val <= 0) return toggleCart(false); // dont call toast if item got removed

//     // if value more thatn itemsLeft setQuanity to itemsLeft
//     if (val > itemsLeft) {
//       setqty(itemsLeft);
//       return toast.error(t("maxItemsAllowed", { count: itemsLeft }));
//     }

//     const inc = val > qty;
//     const promis = performQyt(val);
//     toast.promise(promis, {
//       loading: inc ? `${t("incingQyt")}...` : `${t("decingQyt")}...`,
//       success: inc ? `${t("qytInced")}` : `${t("qytDeced")}`,
//       error: "Cart update failed.",
//     });
//     return promis;
//   };
// }
