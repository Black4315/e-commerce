import { downloads, socialMedia } from "@/constants/constanst";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Download = () => {
  const t = useTranslations("footer");

  return (
    <div className={"flex flex-col gap-5 sm:gap-6 max-md:mt-2"}>
      <h2 className="footer-subtitle">{t("download.header")}</h2>
      <p className="text-text-3 text-sm">{t("download.text")}</p>
      <div className="flex gap-2">
        <Image
          src={"/assets/images/Qrcode.svg"}
          width={80}
          height={80}
          alt="Qr Code"
        />
        <div className="flex flex-col gap-1">
          {downloads.map(({ img, alt, link }, i) => (
            <Link href={link} key={i}>
              <Image src={img} width={110} height={40} alt={alt} />
            </Link>
          ))}
        </div>
      </div>

      <ul className="flex gap-6 justify-center">
        {socialMedia.map(({ Icon, link }, i) => (
          <li key={i} className="hover:text-hover-button-1">
            <Link href={link}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Download;
