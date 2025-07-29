import { Inter, Poppins } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import TopHeader from '@/components/layout/topHeader/TopHeader';
import { AppContextProvider } from '@/providers';
import { Theme } from '@radix-ui/themes';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import "@radix-ui/themes/styles.css";
import { ModalProvider } from '@/components/ui/ModalPopup';

import './style/globals.css';


// load fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${inter.className} ${poppins.className}`}>
      <body style={{ ['--origin-dir' as any]: isRTL ? 'left' : 'right' }} >
        <AppContextProvider>
          <Theme>
            <ModalProvider >
              <div className="page-container">
                <TopHeader locale={locale} />
                <Header />
                <main className='main-content common-padding'>
                  {children}
                </main>
                <Footer />
              </div>
            </ModalProvider>
          </Theme>
        </AppContextProvider>
      </body>
    </html>
  );
}