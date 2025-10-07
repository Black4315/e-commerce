import { CategoryChild } from "@/entities/Categories/types/CategoryType";
import "./style/dropdown.css";
import { AnimatePresence, motion, Variants } from "motion/react";

import { useEffect, useRef, useState } from "react";
import ProgLink from "@/utils/ProgLink";

type Props = {
  items: CategoryChild[];
  isActive: boolean;
};

export default function DropdownPanel({ items, isActive }: Props) {
  const [panelHeight, setPanelHeight] = useState<number | string>("auto");
  const panelRef = useRef<HTMLDivElement>(null);

  // This effect measures the height of the content after it renders
  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.scrollHeight);
    }
  }, [items]);

  return (
    <AnimatePresence mode="sync">
      {isActive && (
        <motion.div
          key="dropdownPanel"
          initial={{ height: 0 }}
          animate={{ opacity: 1, height: panelHeight }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3515, ease: [0.4, 0, 0.6, 1] }}
          className="absolute top-0 start-[234px] z-10 w-[80%] max-h-full bg-secondary-1 overflow-hidden "
        >
          <div className="p-11" ref={panelRef}>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-2 dropdown-panel w-55"
            >
              <AnimatePresence mode="popLayout">
                {items.map(({ link, label, name }, i) => (
                  <motion.li
                    key={i}
                    variants={itemsVariants}
                    transition={{ delay: -0.2 + i + 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:text-black will-animate  med-text md:text-sm font-semibold "
                  >
                    {label ? (
                      <span className="sm-text w-full flex text-neutral-500 mb-2 pb-2 border-b border-neutral-400">
                        {name}
                      </span>
                    ) : (
                      link && <ProgLink href={link}>{name}</ProgLink>
                    )}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.02,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
    },
  },
} as Variants;

// Child item variant - simple states for initial, visible, and exit
const itemsVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 0.6, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 0.6, 1],
    },
  },
} as Variants;
