import { NextIntlClientProvider } from "next-intl";
import { Theme } from "@radix-ui/themes";
import QueryProvider from "@/contexts/QueryContext";
import { UserProvider } from "@/contexts/UserContext";
import { CartProvider } from "@/features/cart/contexts/CartContext";
import { WishlistProvider } from "@/features/wishlist/contexts/WishListContext";
import { getUser } from "@/features/Auth/services/getUser";

export async function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await getUser();
  const initialUser = result.success ? result.user : null;
  return (
    <NextIntlClientProvider>
      <QueryProvider>
        <UserProvider initialUser={initialUser}>
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
