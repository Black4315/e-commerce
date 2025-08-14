import * as React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { cn } from "@/lib/utils";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import { useMobileCheck } from "@/contexts/MobileCheckContext";

interface TooltipProps
  extends Omit<React.ComponentProps<typeof Tooltip>, "title"> {
  title: string | React.ReactElement<unknown, any>;
  children: React.ReactElement<unknown, any>;
  customStyle?: React.CSSProperties;
  className?: string;
}

export const CustomTooltip = styled(
  ({ className, customStyle, ...props }: TooltipProps) => {
    const isMobile = useMobileCheck(); // Detect mobile devices

    if (isMobile) {
      return <>{props.children}</>; // If mobile, just return the children without Tooltip
    }

    return (
      <Tooltip
        enterDelay={300}
        classes={{ popper: cn("", className) }}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 150 }}
        {...props}
      />
    );
  }
)(({ customStyle }: { customStyle?: React.CSSProperties }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#EB5757cf",
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.02em",
    color: "#FAFAFA",
    fontSize: "0.75rem",
    padding: "3px 12px",
    borderRadius: "6px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "7px !important",
    marginTop: "8px !important",
    transition: "all 0.15s ease-in",
    ...(customStyle || {}),
  },
}));
