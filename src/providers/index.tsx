import { NextIntlClientProvider } from "next-intl";
import QueryProvider from "../contexts/QueryContext";
import { UserProvider } from "../contexts/UserContext";
import { CartProvider } from "../contexts/CartContext";
import { WishlistProvider } from "../contexts/WishListContext";
import { ModalProvider } from "@/components/ui/ModalPopup";
import { Theme } from "@radix-ui/themes";


export function AppContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextIntlClientProvider>
            <QueryProvider>
                <UserProvider>
                    <CartProvider>
                        <WishlistProvider>
                            <Theme>
                                <ModalProvider >
                                    {children}
                                </ModalProvider>
                            </Theme>
                        </WishlistProvider>
                    </CartProvider>
                </UserProvider>
            </QueryProvider>
        </NextIntlClientProvider>
    );
}