import { useTranslations } from "next-intl";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import { headers } from "next/headers";
import { isMobileUserAgent } from "@/utils/mobileCheck";
import { generateMetadataContact } from "./seo/metaData";

export const generateMetadata = generateMetadataContact;
export default async function Contact() {
  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile = isMobileUserAgent(userAgent);

  return <ContactPageContent isMobile={isMobile} />;
}

const ContactPageContent = ({ isMobile }: { isMobile: boolean }) => {
  "use client";
  const t = useTranslations("breadCrumbs");

  return (
    <PageBreadCrumbs
      breadcrumbsData={[
        { label: t("home"), link: "/" },
        { label: t("contact") },
      ]}
      isMobile={isMobile}
    >
      <div className="flex md:max-h-120 gap-8 max-md:flex-col !mt-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </PageBreadCrumbs>
  );
};
