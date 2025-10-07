import IconsarrowrightIcon from "@/assets/icons/iconsarrowright"
import ProgLink from "@/utils/ProgLink"
import { useTranslations } from "next-intl"

const MoreDetails = ({ link }: { link: string }) => {
    const t = useTranslations('homePage.product')
    return (
        <ProgLink href={link} className='flex items-center gap-2 hover:text-hover-button-2 text-secondary-3 group'>
            <span className='text-xs border-b my-1 border-0 group-hover:border-hover-button-2 transition-all '>
                {t('moreDetails')}
            </span>
            <IconsarrowrightIcon className={`w-4 h-4 rtl:rotate-180`} />
        </ProgLink>
    )
}

export default MoreDetails