
import { cn } from '@/lib/utils'; // assuming className merge utility
import { useMobileCheck } from '@/contexts/MobileCheckContext';
import CustomAccordion from '@/components/ui/CustomAccordion';
import ProgLink from '@/utils/ProgLink';

type FooterElementListProps = {
    header: string;
    body: { label: string; link?: string }[];
    className?: string;
};

const FooterElementList = ({ header, body, className }: FooterElementListProps) => {
    const isMobile = useMobileCheck();

    const content = (
        <ul className="flex flex-col gap-2 sm:gap-4">
            {body.map(({ label, link }, i) => (
                <li className="footer-text text-text-3" key={i}>
                    {link ? (
                        <ProgLink href={link} className="hover:text-hover-button-1">
                            {label}
                        </ProgLink>
                    ) : (
                        label
                    )}
                </li>
            ))}
        </ul>
    );

    if (isMobile) {
        return <CustomAccordion className={cn('w-full', className)} title={header}>{content}</CustomAccordion>;
    }

    return (
        <div className={cn('flex flex-col gap-5 sm:gap-6', className)}>
            <h2 className="footer-subtitle">{header}</h2>
            {content}
        </div>
    );
};

export default FooterElementList;
