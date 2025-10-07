"use client";

import CopyRight from "./components/CopyRight";

import GetOffer from "./components/GetOffer";
import FooterElementList from "./components/FooterElementList";
import { useTranslations } from "next-intl";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { cn } from "@/lib/utils";
import StickyBtns from "@/components/shared/StickyBtns";
import { LOGO_NAME } from "@/constants";
import { useStickyBtns } from "./hooks/useStickyBtns";
import Download from "./components/Download";
import ProgLink from "@/utils/ProgLink";

const Footer = () => {
  const t = useTranslations("footer");
  const isMobile = useMobileCheck();

  const { hide, footerRef } = useStickyBtns();
  return (
    <>
      <StickyBtns hide={hide} />
      <footer
        id="main-footer"
        className="footer bg-black text-text-1 py-5 common-padding flex flex-col font-poppins"
        ref={footerRef}
      >
        <div
          className={cn(
            `screen-max-width w-full flex justify-between items-start max-lg:flex-col max-lg:gap-10 py-5 md:py-16`,
            isMobile && `flex-col gap-10 py-5`
          )}
        >
          <div className="flex flex-col gap-5 sm:gap-6 ">
            <h1>
              <ProgLink href={"/"} className="logo text-text-1 ">
                {LOGO_NAME}
              </ProgLink>
            </h1>

            <h2>
              <ProgLink href={"/subscribe"} className="footer-subtitle">
                {t("sub")}
              </ProgLink>
            </h2>
            <GetOffer />
          </div>

          <FooterElementList
            className={`${!isMobile && "w-44"}`}
            header={t("support.title")}
            body={t.raw("support.list")}
          />

          <FooterElementList
            className={`${isMobile && "-my-3"}`}
            header={t("account.title")}
            body={t.raw("account.list")}
          />

          <FooterElementList
            header={t("quickLinks.title")}
            body={t.raw("quickLinks.list")}
          />

          <Download />
        </div>

        <CopyRight />
      </footer>
    </>
  );
};

export default Footer;
