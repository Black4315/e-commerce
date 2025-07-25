import Image from "next/image";

const BadgeItem = ({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) => {
    return (
        <div className="flex-center gap-6 flex-col">
            <div className="bg-black w-20 h-20 rounded-full border-[10px] border-[#c1c0c1] flex-center">
                <Image src={icon} width={40} height={40} alt={'icon'} className="text-text-1" />
            </div>

            <div className="text-center">
                <h3 className="med-text">{title}</h3>
                <p className="reg-text text-sm">{description}</p>

            </div>
        </div>
    )
}

export default BadgeItem