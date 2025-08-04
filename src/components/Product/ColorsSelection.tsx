

const ColorsSelection = ({
    colors,
    color,
    setColor
}: {
    colors: string[]
    color: string | null
    setColor: (color: string | any) => void
}) => {
    return (
        <div className="space-y-2">
            <span className="semi-text text-xs md:text-sm capitalize">Colors:</span>
        </div>
    )
}

export default ColorsSelection