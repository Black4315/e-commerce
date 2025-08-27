import { IconDeliveryBlack, IconReturn } from "@/assets";
import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ShippingInfoBadges = () => {
  const t = useTranslations("homePage.product");
  return (
    <div className="rounded border border-border *:not-last:border-b *:border-border *:p-4 *:py-6 w-fit">
      {/* free delivery badge */}
      <div className="flex gap-4">
        <Image
          src={IconDeliveryBlack}
          width={40}
          height={40}
          alt="show image"
        />

        <div className=" flex flex-col gap-4 justify-between">
          <h3 className="med-text">{t("freeDeliv")}</h3>
          <p className="sm-text font-medium underline cursor-pointer leading-normal">
            {t("checkDelivAvalable")}
          </p>
        </div>
      </div>

      {/* free return badge */}
      <div className="flex gap-4">
        <Image src={IconReturn} width={40} height={40} alt="show image" />

        <div className=" flex flex-col gap-4 justify-between">
          <h3 className="med-text">{t("returnDelivery")}</h3>
          <p className="sm-text font-medium leading-normal">
            {t("returnDeliveryDesc")}
            <Tooltip
              enterTouchDelay={0.1}
              leaveTouchDelay={1000}
              placement="top"
              title={t("returnDeliveryDetails")}
            >
              <button className="underline ms-2">
                {t("details")}
              </button>
            </Tooltip>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoBadges;
