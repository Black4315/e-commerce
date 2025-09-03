"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, useState, useRef } from "react";

const ExpandableText = ({
  text,
  className,
  isLong:long,
  ...props
}: { text: string, isLong?:boolean} & ComponentProps<"p">) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = long ?? false
  const ref = useRef<HTMLParagraphElement>(null);


  return (
    <div
      aria-label="expanded-text"
      className="relative"
      aria-expanded={expanded}
    >
      <p
        ref={ref}
        className={cn(
          "whitespace-pre-wrap transition-all overflow-hidden",
          className
        )}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          height: !expanded && isLong ? "100px" : ref.current?.scrollHeight,
        }}
        {...props}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 mt-1 text-sm cursor-pointer hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
