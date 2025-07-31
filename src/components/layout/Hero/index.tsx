'use client';
import BestSellings from "@/features/BestSellings"
import BrowseByCategory from "@/features/BrowseByCategory"
import CampaignOffer from "@/features/CampaignOffer"
import Categorys from "@/features/Categories"
import FlashSales from "@/features/FlashSalses"
import NewArrival from "@/features/NewArrival"
import OffersSlider from "@/features/OffersSlider"
import OurProducts from "@/features/OurProducts"
import TrustBadges from "@/features/TrustBadges"

const Hero = () => {
  return (
    <div className="screen-max-width">
      <section className="categorys-offers-slider flex pb-10 md:pb-18">
        <Categorys />
        <OffersSlider />
      </section>

      <FlashSales />
      <BrowseByCategory />
      <BestSellings />
      <CampaignOffer />
      <OurProducts />
      <NewArrival />
      <TrustBadges />
      <AppleMenu />
    </div>

  )
}

export default Hero


import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase)

const categories = [
  { label: 'Mac', items: ['MacBook AirMac Book Air', 'MacBook ProMac Book Air', 'iMac', 'Mac Mini', 'MacBook Air', 'MacBook Air', 'MacBook Air', 'MacBook Air', 'MacBook Air', 'MacBook Air'] },
  { label: 'iPhone', items: ['iPhone 15', 'iPhone 14', 'iPhone SE'] },
  { label: 'iPad', items: ['iPad Pro', 'iPad Air', 'iPad Mini'] },
  { label: 'Watch', items: ['Series 9', 'Ultra', 'SE'] },
];

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1, // لو حابب العكس
    },
  },
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.03,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    transition: {
      y: { duration: 0.1, ease: [0, 0, 0.5, 1] },
      opacity: { duration: 0.2, ease: [0, 0, 0.5, 1] },
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.1, ease: [0, 0, 0.5, 1] },
      opacity: { duration: 0.2, ease: [0, 0, 0.5, 1] },
    },
  },
};

export function AppleMenu() {
  const [active, setActive] = useState<string | null>(null);
  const [hasOpened, setHasOpened] = useState(false);

  const activeItems = categories.find((cat) => cat.label === active)?.items || [];

  useEffect(() => {
    if (active && !hasOpened) {
      setHasOpened(true);
    }
  }, [active, hasOpened]);

  // useGSAP(()=>{
  //   active && gsap.to('.lili',{
  //     stagger: 0.03
  //   })
  // }, [active])

  return (
    <div onMouseLeave={() => setActive(null)} className="relative z-50 bg-[#f9f9f9] p-4 border-b border-gray-200">
      <div className="flex gap-6 text-gray-700 font-medium">
        {categories.map((cat) => (
          <div
            key={cat.label}
            onMouseEnter={() => setActive(cat.label)}
            className="cursor-pointer hover:text-black transition"
          >
            {cat.label}
          </div>
        ))}
      </div>

      {/* Shared submenu container */}
      <AnimatePresence mode="sync">
        {active && (
          <motion.div
            key="submenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 400, }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.5, 1], }}
            className="absolute left-0 top-14 w-full h-100 bg-white shadow-lg overflow-hidden "
          >
            <motion.ul
              variants={containerVariants} 
              initial={'hidden'}  
              animate={'visible'} 
              exit="hidden"
              className="p-4 space-y-2 text-sm text-gray-600 w-full"
            >
              {activeItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={(itemVariants as any)}
                  exit={{}}
                  className="hover:text-black will-animate lili"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useLayoutEffect, useRef } from "react";

// const MyComponent = () => {
//   const containerRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       containerRef.current.querySelectorAll(".animated-li"),
//       {
//         opacity: 0,
//         y: -5,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.2,
//         ease: "cubic-bezier(0, 0, 0.5, 1)",
//         stagger: {
//           each: 0.03,
//           from: "start", // أو "end" لو عايز reverse
//           delay: 0.25,   // delay before starting
//         },
//       }
//     );
//   }, []);

//   return (
//     <ul ref={containerRef} className="p-4 space-y-2">
//       {activeItems.map((item, i) => (
//         <li key={i} className="animated-li text-gray-600">
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// };
