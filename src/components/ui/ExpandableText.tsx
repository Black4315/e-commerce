"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, useState, useRef } from "react";

type ExpandableTextProps = {
  text: string;
  isLong?: boolean;
  collapsedHeight?: number;
} & ComponentProps<"p">;

const ExpandableText = ({
  text,
  className,
  isLong: long,
  collapsedHeight = 100,
  ...props
}: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = long ?? false;
  const ref = useRef<HTMLParagraphElement>(null);

  return (
    <div className="relative">
      <p
        id="expandable-text"
        ref={ref}
        className={cn(
          "whitespace-pre-wrap transition-all overflow-hidden",
          className
        )}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          height:
            !expanded && isLong
              ? `${collapsedHeight}px`
              : ref.current?.scrollHeight
              ? `${ref.current.scrollHeight}px`
              : "auto",
        }}
        {...props}
      >
        {text}
      </p>

      {isLong && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="expandable-text"
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 mt-2 text-sm font-medium cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
