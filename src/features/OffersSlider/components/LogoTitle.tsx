import Image from "next/image"

const LogoTitle = ({
    logo,
    name
}: {
    logo: string;
    name: string
}) => {
    return (
        <div className="flex gap-3 items-center">
            <Image src={logo} width={35} height={35} alt={name} className='object-contain' />
            <span className='reg-text text-text'>{name}</span>
        </div>
    )
}

export default LogoTitle
