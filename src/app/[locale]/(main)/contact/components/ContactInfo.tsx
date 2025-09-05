"use client";

import { MailIcon, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type InfoSection = {
  label: string;
  eles: string[];
};

const ContactIcon = ({ type }: { type: "phone" | "mail" }) => (
  <div
    className="w-10 h-10 rounded-full flex-center text-text-1 bg-secondary-3"
    aria-hidden="true"
  >
    {type === "phone" ? (
      <Phone aria-hidden="true" />
    ) : (
      <MailIcon aria-hidden="true" />
    )}
  </div>
);

const ContactItem = ({ item }: { item: string }) => {
  const isEmail = item.includes("@");
  const isPhone = /^\+?\d/.test(item);
  const t = useTranslations("contact");

  if (isEmail) {
    return (
      <>
      <span>{t("email")}: </span>
      <Link href={`mailto:${item}`} className="hover:underline text-blue-600">
        {item}
      </Link>
      </>
    );
  }

  if (isPhone) {
    return (
      <>
      <span>{t("phone")}: </span>
      <Link href={`tel:${item}`} className="hover:underline text-blue-600">
        {item}
      </Link>
      </>
    );
  }

  return <span>{item}</span>;
};

const ContactSection = ({
  label,
  eles,
  index,
}: InfoSection & { index: number }) => (
  <section
    className="flex flex-col gap-7 not-last:pb-7 not-last:border-b not-last:border-border"
    aria-labelledby={`contact-label-${index}`}
  >
    {/* Title and icon */}
    <div className="flex gap-4 items-center">
      <ContactIcon type={index === 0 ? "phone" : "mail"} />
      <h3 id={`contact-label-${index}`} className="med-text">
        {label}
      </h3>
    </div>

    {/* Info */}
    <ul className="flex flex-col gap-4">
      {eles.map((item, i) => (
        <li key={i} className="sm-text">
          <ContactItem item={item} />
        </li>
      ))}
    </ul>
  </section>
);

const ContactInfo = () => {
  const t = useTranslations("contact");
  const infos = t.raw("infos") as InfoSection[];

  return (
    <address
      className="p-6 md:p-10 flex flex-col rounded-xl gap-8 w-full md:max-w-85 shadow-[0px_1px_13px_rgba(0,0,0,0.05)] not-italic"
      aria-label="Contact Information"
    >
      {infos.map((info, index) => (
        <ContactSection key={index} {...info} index={index} />
      ))}
    </address>
  );
};

export default ContactInfo;
