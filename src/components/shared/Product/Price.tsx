import { currencyOfPrice } from "@/utils";

const Price = ({ currency, price }: { currency: string; price: number | string }) => {
  return (
    <>
      <span className={`${currency.toLowerCase() !== "usd" && "price-symbol"}`}>
        {currencyOfPrice(currency)}
      </span>
      {price}
    </>
  );
};

export default Price;
{
}
