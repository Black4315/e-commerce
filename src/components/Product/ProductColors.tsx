
const ProductColors = ({
    colors,
    selectedColor:Scolor
}: {
    colors?: string[]
    selectedColor?: string | null
}) => {
    return (
        colors?.length ? 
        <div className="flex gap-[7px] mt-1.5">
            {colors.slice(0,6).map((color, i) => (
                <div key={i} className={`w-3.5 h-3.5 rounded-full border border-black/60 relative rounded-border ${colors.indexOf(Scolor || '') == i && 'after:opacity-100 after:border-black'}`} style={{ background: color }} />
            ))}
            {colors.length > 6 && <span className="xs-text text-blue-500 hover:border-b ">+{colors.length -6}</span>}
        </div>
            : ''
    )
}

export default ProductColors