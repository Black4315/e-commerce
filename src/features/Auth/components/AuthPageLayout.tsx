'use client'

import { useEffect, useState } from "react"
import AuthPageImage from "./AuthPageImage"

const AuthPageLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [hydrated, sethydrated] = useState(false)
    useEffect(() => sethydrated(true), [])

    return (
        hydrated ?
            <div className="flex-center py-18 h-195 w-screen">
                <AuthPageImage />
                {children}
            </div>
            : <div className="w-10 h-10 border border-t-transparent border-border animate-spin" />

    )
}

export default AuthPageLayout