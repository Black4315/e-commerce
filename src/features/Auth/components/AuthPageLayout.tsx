"use client";

import { useEffect, useState } from "react";
import AuthPageImage from "./AuthPageImage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useHydrated } from "@/hooks/useHydrated";

const AuthPageLayout = ({ children }: { children?: React.ReactNode }) => {
  const { hydrated } = useHydrated();

  return (
    <div className="relative common-padding h-screen">
      {/* blue backdrop  */}
      <div className="w-[45%] lg:w-[50%] bg-bluedrop h-screen fixed start-0 hidden md:flex justify-center items-center rounded-e ">
        <AuthPageImage />
      </div>

      <div className="flex h-screen w-full">
        <div className="w-[50%] hidden md:block" />
        <div className="py-8 box-content my-auto w-full sm:w-fit sm:m-auto">
          {hydrated ? (
            children
          ) : (
            <LoadingSpinner wrapperclassName="flex-center" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
