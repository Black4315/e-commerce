import { useTranslations } from "next-intl";
import Link from "next/link";

const Contact = () => {
    const t = useTranslations('ContactPage');
    return (
        <div>
            <h1>{t('title')}</h1>
            <Link href="/">{t('home')}</Link>
        </div>
    );
}

export default Contact