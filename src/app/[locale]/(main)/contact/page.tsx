import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
    const t = useTranslations('contact');
    return (
        <div className="screen-max-width">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/" className="font-poppins">
                    {t('home')}
                </Link>
                <Typography sx={{ color: 'text.primary', fontFamily: "var(--font-poppins" }}>{t('contact')}</Typography>
            </Breadcrumbs>

            <div>
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact