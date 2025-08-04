import Cart1Icon from "@/assets/icons/Cart1"

export default function AddButton({
    inStock,
    onClick,
    label,
    soldOut,
}: {
    inStock?: boolean
    onClick: () => void
    label: string
    soldOut: string
}) {
    return (
        <button
            onClick={onClick}
            className="uppercase w-full h-full med-text md:text-sm hover:bg-black/80 py-2 bg-black text-center text-text-1 z-10 transition-apple duration-200 flex-center gap-2"
        >
            {inStock ? (
                <>
                    <Cart1Icon className="w-5 h-5" /> <span>{label}</span>
                </>
            ) : (
                soldOut
            )}
        </button>
    )
}
