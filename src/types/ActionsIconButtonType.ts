import Tooltip from "@mui/material/Tooltip";

export interface ActionsIconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    href: string;
    title: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    alt?: string;
    width: number;
    height: number;
    iconClassName?: string;
    children?: React.ReactNode;
    tooltipPlacement?: React.ComponentProps<typeof Tooltip>['placement'] ;
}
