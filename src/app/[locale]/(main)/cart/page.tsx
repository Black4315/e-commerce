"use client";
import { useTranslations } from "next-intl";
import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import CartTable from "../../../../features/cart/components/CartTable";
import UpdateCartBtn from "../../../../features/cart/components/CartBtns";
import CoponForm from "@/features/cart/components/CoponForm";
import TotalCheckout from "@/features/cart/components/TotalCheckout";
import { useCartContext } from "@/features/cart/contexts/CartContext";

const CartPage = () => {
  const t = useTranslations("");
  const { cart, isLoading } = useCartContext();

  // TODO: adjust currencey for whole product like convert USD to EGP due to the regoin and shipping to be real and taxes for every variant
  const currency = "USD";
  const subTotal = cart.reduce(
    (prev, curr) => curr.selectedVariant.price * curr.quantity + prev,
    0
  );
  const taxes = cart.reduce(
    (prev, curr) => curr.taxes + prev,
    0
  );
  return (
    <PageBreadCrumbs
      breadcrumbsData={[
        { label: t("breadCrumbs.home"), link: "/" },
        { label: t("breadCrumbs.cart") },
      ]}
    >
      <div className="my-18 md:my-20">
        <CartTable {...{ cart, isLoading }} />
        <UpdateCartBtn />
      </div>

      <div className="flex justify-between max-md:flex-col gap-6">
        <CoponForm />
        <TotalCheckout
          subTotal={subTotal}
          taxes={taxes}
          shipping={0}
          currency={currency}
        />
      </div>
    </PageBreadCrumbs>
  );
};

export default CartPage;
