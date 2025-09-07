import { useTranslations } from "next-intl";
import PageBreadCrumbs from "@/components/ui/Page_BreadCrumbs";
import { headers } from "next/headers";
import { isMobileUserAgent } from "@/utils/mobileCheck";
import { aboutPageMetaData } from "./seo/metaData";
import StatsSection from "./components/StatsSection";
import TrustBadges from "@/components/shared/TrustBadges";
import CompanyCreators from "./components/CompanyCreators";

export const generateMetadata = aboutPageMetaData;
export default async function About() {
  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile = isMobileUserAgent(userAgent);

  return <AboutPage isMobile={isMobile} />;
}

const AboutPage = ({ isMobile }: { isMobile?: boolean }) => {
  const t = useTranslations("");
  return (
    <PageBreadCrumbs
      breadcrumbsData={[
        { label: t("breadCrumbs.home"), link: "/" },
        { label: t("breadCrumbs.about") },
      ]}
      isMobile={isMobile}
    >
      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center !mt-10">
        <div className="flex flex-col gap-6">
          <h1 className="semi-heading text-2xl md:text-5xl text-gray-900">
            {t("about.ourStory")}
          </h1>
          <p className="reg-text leading-relaxed text-gray-600">
            {t("about.firstP")}
          </p>
          <p className="reg-text leading-relaxed text-gray-600">
            {t("about.secondP")}
          </p>
        </div>
        <div className="w-full h-150 bg-[#EB7EA8] rounded-lg shadow-lg">
          {/* Placeholder for an image or dynamic content */}
        </div>
      </main>

      <StatsSection />
      <CompanyCreators />
      <section className="*:!pb-0">
        <TrustBadges />
      </section>
    </PageBreadCrumbs>
  );
};
