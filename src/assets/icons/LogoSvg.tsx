import { LOGO_NAME } from '@/constants'; // import your constant
type Props = React.SVGProps<SVGSVGElement>;

export default function LogoSVG(props: Props) {
    return (
        <svg {...props} className="absolute inset-0 w-full h-full bg-skeleton z-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '700',
                    fill: '#0003',
                    fontSize: '8px',
                    textTransform: 'uppercase',
                }}
            >
                {LOGO_NAME}
            </text>
        </svg>
    );
}
