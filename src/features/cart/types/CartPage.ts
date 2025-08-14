import { CartItem } from "./cartType";

export interface CartItemPresentationalProps {
  item: CartItem;
  handleUpdateQty: (newQuantity: number) => void;
  maxQyt: number;
  quantity: number;
}
