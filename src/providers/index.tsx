import { NextIntlClientProvider } from "next-intl";
import { Theme } from "@radix-ui/themes";
import QueryProvider from "@/contexts/QueryContext";
import { UserProvider } from "@/contexts/UserContext";
import { CartProvider } from "@/features/cart/contexts/CartContext";
import { WishlistProvider } from "@/features/wishlist/contexts/WishListContext";

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider>
      <QueryProvider>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>
              <Theme>{children}</Theme>
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </QueryProvider>
    </NextIntlClientProvider>
  );
}
