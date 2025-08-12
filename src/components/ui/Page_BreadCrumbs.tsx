import { Breadcrumbs, Link, Typography } from '@mui/material';
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
                    (i != breadcrumbsData.length - 1) ? <Link underline="hover" color="inherit" href={link} className="sm-text capitalize">
                        {label}
                    </Link> : <span className='capitalize sm-text text-black'>{label}</span>

                ))}
            </Breadcrumbs>
            {children}
        </div>
    )
}

export default PageBreadCrumbs