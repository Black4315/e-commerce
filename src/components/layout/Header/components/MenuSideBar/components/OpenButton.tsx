"use client"
import { HiOutlineMenuAlt1 } from "react-icons/hi";

type Props = {
    onClick: () => void;
};

const OpenButton = ({ onClick }: Props) => (
    <button
        onClick={onClick}
        className="p-1 flex-center -m-1 max-sm:pr-1 text-2xl active:bg-black/5 text-black/70 hover:text-black transition-all rounded-full"
    >
        <HiOutlineMenuAlt1 />
    </button>
);

export default OpenButton;
