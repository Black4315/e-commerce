import { IoIosArrowBack } from "react-icons/io";

type Props = {
    onClick: () => void;
};

const ReturnBtn = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    aria-label="return btn"
    className="p-1 flex-center rtl:rotate-180 -m-1 max-sm:pr-1 text-2xl active:bg-black/5 text-black/70 hover:text-black transition-all rounded-full"
  >
    <IoIosArrowBack />
  </button>
);

export default ReturnBtn;
