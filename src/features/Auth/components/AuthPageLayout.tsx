'use client'

import { useEffect, useState } from "react"
import AuthPageImage from "./AuthPageImage"
import LoadingSpinner from "@/components/ui/LoadingSpinner"

const AuthPageLayout = ({
    children
}: {
    children?: React.ReactNode
}) => {
    const [hydrated, sethydrated] = useState(false)
    useEffect(() => sethydrated(true), [])

    return (
        <div className="my-20 relative common-padding">

            {/* blue backdrop  */}
            <div className="w-[45%] lg:w-[50%] bg-bluedrop h-195 absolute start-0 hidden md:flex justify-end rounded-e ">
                <AuthPageImage />
            </div>

            <div className="screen-max-width flex h-195 max-sm:!w-[unset] max-sm:!mx-4">
                <div className="w-[50%] hidden md:block"/>
                <div className="flex-center h-full mx-auto max-md:w-full">
                    {hydrated ? children : <LoadingSpinner /> }
                </div>
            </div>

        </div>
    )
}

export default AuthPageLayout

