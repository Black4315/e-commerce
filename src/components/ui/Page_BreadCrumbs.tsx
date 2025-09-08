import ProgLink from '@/utils/ProgLink';
import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import React, { ComponentProps } from 'react'

const PageBreadCrumbs = ({
  breadcrumbsData,
  children,
  isMobile,
  ...props
}: { 
    breadcrumbsData: { label: string; link?: string;}[];
    isMobile?: boolean 
} & ComponentProps<"div">) => {
  return (
    <div
      className={`margin-spacey screen-max-width ${isMobile && "!mt-0"}`}
      {...props}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        className={`${isMobile && "!mb-0 !py-3"}`}
        classes={
          isMobile
            ? {
                ol: "overflow-x-auto !flex-nowrap unvis-scroll",
                li: "shrink-0",
              }
            : {}
        }
      >
        {breadcrumbsData.map(({ label, link }, i) =>
          i != breadcrumbsData.length - 1 ? (
            <ProgLink
              href={link ?? ""}
              className="sm-text capitalize hover:underline text-inherit"
              key={i}
            >
              {label}
            </ProgLink>
          ) : (
            <span className="capitalize sm-text text-black whitespace-nowrap ellipsis block max-w-100">
              {label}
            </span>
          )
        )}
      </Breadcrumbs>
      {children}
    </div>
  );
};

export default PageBreadCrumbs