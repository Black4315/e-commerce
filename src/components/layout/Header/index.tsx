"use client";

import Link from "next/link";
import NavBar from "./components/NavBar";
import SearchComponent from "../../../features/Search/components/SearchComponent";
import NavProfileActions from "./components/ActionsNav";
import { useUserContext } from "@/contexts/UserContext";
import { useEffect } from "react";
import SideBarMenu from "@/components/layout/Header/components/MenuSideBar";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LOGO_NAME } from "@/constants";
import { useHeader } from "./hooks/useHeader";

const Header = () => {
  const isMobile = useMobileCheck(); // Assuming useMobileCheck is a custom hook to check if the device is mobile
  const t = useTranslations("header");
  const { user, isLoggedIn, login } = useUserContext(); // Assuming useUserContext is a custom hook to get user data
  const { hydrated, onSearch } = useHeader();

  useEffect(() => {
    login();
    console.log("User:", user);
  }, []);

  return (
    <header
      className={cn(
        "header common-padding",
        isMobile ? "h-fit justify-end px-3 py-3 pt-6" : "md:h-[100px]"
      )}
    >
      <div
        className={`screen-max-width w-full flex ${isMobile ? "flex-col" : ""}`}
      >
        <div className="items-center justify-between flex w-full">
          <div className="flex items-center gap-2">
            <SideBarMenu
              className={`lg:hidden ${isMobile && "!block"}`}
            />
            <Link href={"/"} className="logo max-lg:mx-2">
              {LOGO_NAME}
            </Link>
          </div>

          <div className={`hidden lg:block ${isMobile && "!hidden"}`}>
            <NavBar />
          </div>

          <div className="flex gap-3.5 items-center">
            {hydrated && !isMobile && <SearchComponent onSearch={onSearch} />}
            <NavProfileActions>
              <NavProfileActions.cart />
              {isLoggedIn ? (
                <NavProfileActions.user />
              ) : (
                <Link
                  href={"/auth/login"}
                  className="login-btn max-xs:w-13 max-xs:ms-1"
                  children={t("logInBtn")}
                />
              )}
            </NavProfileActions>
          </div>
        </div>

        {/* iam changing only place of search component cuz we have another design for mobile to responsize */}
        {isMobile && hydrated && (
          <SearchComponent onSearch={onSearch} className="mt-3 mb-1" />
        )}
      </div>
    </header>
  );
};

export default Header;
