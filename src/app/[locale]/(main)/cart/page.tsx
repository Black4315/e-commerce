"use client";
import { useTranslations } from "next-intl";
import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import CartTable from "./components/CartTable";
import UpdateCartBtn from "../../../../features/cart/components/UpdateCartBtn";
import CoponForm from "@/features/cart/components/CoponForm";
import TotalCheckout from "@/features/cart/components/TotalCheckout";
import { useCartContext } from "@/features/cart/contexts/CartContext";
import { useMobileCheck } from "@/contexts/MobileCheckContext";

const CartPage = () => {
  const t = useTranslations("");
  const { cart, isLoading, subTotal, totalTaxes, calculateTotalPrice } =
    useCartContext();
  const isMobile = useMobileCheck();

  // TODO: adjust currencey for whole product like convert USD to EGP due to the regoin cuz it and shipping to be real and taxes for every variant
  const currency = cart[0]?.selectedVariant?.currency;
  return (
    <PageBreadCrumbs
      breadcrumbsData={[
        { label: t("breadCrumbs.home"), link: "/" },
        { label: t("breadCrumbs.cart") },
      ]}
    >
      <h3 className="font-normal text-xl font-poppins leading-6 capitalize mt-18 md:mt-20 mb-4 md:mb-6">
        {t("breadCrumbs.cart")} ({cart.length})
      </h3>
      <div className="mb-18 md:mb-20">
        {isMobile ? (
          <CartTable.MobileVersion {...{ cart, isLoading }} />
        ) : (
          <CartTable {...{ cart, isLoading }} />
        )}
        <UpdateCartBtn />
      </div>

      <div className="flex justify-between max-md:flex-col gap-4 md:gap-6">
        <CoponForm />
        <TotalCheckout
          total={calculateTotalPrice()}
          subTotal={subTotal}
          taxes={totalTaxes}
          shipping={0}
          currency={currency}
        />
      </div>
    </PageBreadCrumbs>
  );
};

export default CartPage;
