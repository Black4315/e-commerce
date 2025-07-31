"use client"

import Link from "next/link"
import NavBar from "./components/NavBar"
import SearchComponent from "../../../features/Search/SearchComponent"
import NavProfileActions from "./components/ActionsNav"
import { useUserContext } from "@/contexts/UserContext"
import { useEffect, useState } from "react"
import SideBarMenu from "@/components/layout/Header/components/MenuSideBar"
import { useMobileCheck } from "@/hooks/useMobileCheck"
import { cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import { useTranslations } from "next-intl"
import { LOGO_NAME } from "@/constants"


const Header = () => {
    const { user, isLoggedIn, login } = useUserContext(); // Assuming useUserContext is a custom hook to get user data
    const [hydrated, setHydrated] = useState(false);
    const isMobile = useMobileCheck(); // Assuming useMobileCheck is a custom hook to check if the device is mobile
    const t = useTranslations('header')


    useEffect(() => { setHydrated(true); console.log("User:", user); }, [user, isLoggedIn]);

    useEffect(()=>{
        login() 
    },[])

    // Function to handle search
    // This can be passed down to SearchComponent to handle search queries
    const onSearch = (searchTerm: string) => {
        console.log("Search Term:", searchTerm);
    }

    return (
        <header className={cn("h-20 border-b border-border bg-white py-4.5 common-padding flex items-end",
            isMobile ? 'h-35 justify-end px-3 py-3' : 'md:h-[100px]'
        )}>
            
            <div className={`screen-max-width w-full flex ${isMobile ? 'flex-col' : ''}`}>

                <div className="items-center justify-between flex w-full">
                    <div className="flex items-center gap-2">
                        <SideBarMenu className='lg:hidden' />
                        <Link href={'/'} className='logo max-lg:mx-2'>{LOGO_NAME}</Link>
                    </div>

                    <div className='hidden lg:block'>
                        <NavBar />
                    </div>

                    <div className='flex gap-3.5 items-center'>
                        {(hydrated && !isMobile) && <SearchComponent onSearch={onSearch} />}
                        <NavProfileActions>
                            <NavProfileActions.cart />
                            {isLoggedIn ? 
                                (<NavProfileActions.user />) : 
                                <Link href={'/auth/login'} className="login-btn max-xs:w-13 max-xs:ms-1" children={t('logInBtn')}/>
                            }
                        </NavProfileActions>
                    </div>

                </div>
        
                {/* iam changing only place of search component cuz we have another design for mobile to responsize */}
                {(isMobile && hydrated) && <SearchComponent onSearch={onSearch} className="mt-3 mb-1" />}
            </div>
        </header>
    )
}

export default Header