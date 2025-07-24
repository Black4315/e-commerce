
const ProductColors = ({
    colors
}: {
    colors?: string[]
}) => {
    return (
        colors?.length ? <div className="flex gap-[7px] mt-1.5">
            {colors.map((color,i) => (
                <div key={i} className={`w-3 h-3 rounded-full`} style={{ background: color }} />

            ))}
        </div>
            : ''
    )
}

export default ProductColors