import { Skeleton } from '@mui/material'
import React from 'react'

const LoadingCampaign = () => {
    return (
        <div className='overflow-hidden h-[400px] md:h-[500px]'>

            <Skeleton
                className='bg-black w-full Relative my-10 md:my-18 py-17 px-14'
                variant='rectangular'
                height={500}
            />
        </div>
    )
}

export default LoadingCampaign