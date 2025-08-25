import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import React, { ComponentProps } from 'react'

const PageBreadCrumbs = ({
    breadcrumbsData,
    children,
    ...props
}: {
    breadcrumbsData: { label: string; link?: string }[]
} & ComponentProps<'div'>) => {
    return (
        <div className='margin-spacey screen-max-width' {...props}>
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbsData.map(({ label, link }, i) => (
                    (i != breadcrumbsData.length - 1) ? <Link color="inherit" href={link ?? ''} className="sm-text capitalize hover:underline" key={i}>
                        {label}
                    </Link> : <span className='capitalize sm-text text-black'>{label}</span>

                ))}
            </Breadcrumbs>
            {children}
        </div>
    )
}

export default PageBreadCrumbs