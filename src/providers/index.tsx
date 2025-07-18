import { NextIntlClientProvider } from "next-intl";
import QueryProvider from "../contexts/QueryContext";
import { UserProvider } from "../contexts/UserContext";
import { CartProvider } from "../contexts/CartContext";
import { WishlistProvider } from "../contexts/WishListContext";


export function AppContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextIntlClientProvider>
            <QueryProvider>
                <UserProvider>
                    <CartProvider>
                        <WishlistProvider>
                            {children}
                        </WishlistProvider>
                    </CartProvider>
                </UserProvider>
            </QueryProvider>
        </NextIntlClientProvider>
    );
}