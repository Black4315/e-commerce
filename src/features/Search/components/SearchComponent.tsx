"use client";
import { searchIcon } from "@/assets";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"

type searchProps = {
    onSearch: (query: string) => void;
    className?: string;
}

const SearchComponent = ({ onSearch, className }: searchProps) => {
    const [query, setQuery] = useState('');

    const formRef = useRef<HTMLFormElement>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query.trim());
        setQuery(''); // Clear the input after search
    }
    // TODO: add gsap animation to search input
    // TODO: add search request services and search results page
    return (
        <form 
            ref={formRef}
            onSubmit={handleSearch} 
            className={cn("flex items-center gap-3 box-border bg-secondary-1 rounded-3xl py-1 pe-1 ps-3",className)}>
            <input
                type="text"
                value={query}
                name="searchQuery"
                onChange={(e) => setQuery(e.target.value)}
                placeholder={useTranslations('header')('searchPlaceholder')}
                className="outline-none w-full text-sm"
            />
            <button type="submit" className="text-black cursor-pointer p-1 rounded-full hover:bg-black/30  active:bg-black/30 transition-all">
                <Image src={searchIcon} alt= "search" width={32} height={32} className="max-sm:w-7"  />
            </button>
        </form>
    )
}

export default SearchComponent

