import Image from "next/image"

const AuthPageImage = () => {
    return (
        <div className="w-11/12 h-full overflow-hidden">
            <Image src={'/assets/images/SideImage.svg'} width={300} height={300} alt="SideImage" className="object-contain w-full h-full"/>
        </div>
    )
}

export default AuthPageImage