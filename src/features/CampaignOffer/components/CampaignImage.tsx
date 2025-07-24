import Image from 'next/image'
import React from 'react'

const CampaignImage = ({ src }: { src: string }) => {
    return (
        <div className='md:absolute max-sm:w-75 max-md:w-95 max-md:self-center w-[600px] h-full end-6 md:end-13 flex items-center'>
            <Image src={src} width={300} height={220} alt={'Campaign Product'} className='ms-auto md:w-[86%] object-contain'/>

        </div>
    )
}

export default CampaignImage