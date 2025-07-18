"use client"
import { useIsRTL } from "@/hooks/useIsRTL";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { createContext, useContext, useEffect, useState } from "react";

type imageSliderContextType = {
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

const ImageSliderContext = createContext<imageSliderContextType | undefined>(undefined)

export const useImageSliderContext = () => {
    const context = useContext(ImageSliderContext)
    if (context === undefined) {
        throw new Error('useImageSliderContext must be used within ImageSliderProvider')
    }
    return context
}

// image slider provider to use states along the imag slider compoennts without pass props
export const ImageSliderProvider = ({
    current: currentProp,
    setCurrent: setCurrentProp,
    children
}: {
    current?: number;
    setCurrent?: React.Dispatch<React.SetStateAction<number>>
    children: React.ReactNode
}) => {
    const [currentState, setCurrentState] = useState(0);


    const current = currentProp === undefined ? currentState : currentProp;
    const setCurrent = setCurrentProp === undefined ? setCurrentState : setCurrentProp;


    return (
        <ImageSliderContext.Provider value={{ current, setCurrent }}>
            {children}
        </ImageSliderContext.Provider>
    )
}


// ImageSliderWrapper to wrapp image slider components 
export const ImageSliderWrapper = ({
    current,
    setCurrent,
    children,
    className
}: {
    current?: number;
    setCurrent?: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode;
    className?: string;
}) => (
    <ImageSliderProvider {...{ current, setCurrent }}>
        <div
            className={cn("!relative w-full h-[344px] overflow-hidden bg-black", className)}>

            {children}
        </div>
    </ImageSliderProvider>
)

/**
 * image slider it depend on current state that it is index of the array of slider element 
 * it plus + current by 1 every 5sec
 *  
 */
export const ImageSlider = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof motion.div>) => {
    // Context values
    const isRTL = useIsRTL();
    const { current, setCurrent } = useImageSliderContext();
    const childrenArray = React.Children.toArray(children as any); // Ensures children is treated as an array

    let sliderLength = childrenArray.length

    // Handle slide changes
    const goToNextSlide = () => {
        setCurrent((prev) => (prev + 1) % sliderLength); // Loop through slides
    };

    // Optional: Auto-slide every few seconds
    useEffect(() => {
        // update slider length on children changes at first render the length could be 0 if data comes from api or somthing
        sliderLength = childrenArray.length

        const intervalId = setInterval(() => {
            goToNextSlide();
        },5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval when component unmounts
    }, [current, sliderLength,children]);


    return (
        <>
            <motion.div
                className={cn('w-full flex h-full !absolute', className)}
                animate={{ translateX: `${isRTL ? "" : "-"}${current * 100}%` }}  // Change translateX based on slide index
                transition={{
                    type: "tween",           // Using tween for smoother animation
                    ease: "easeInOut",      // Smooth and natural transition
                    duration: 0.4,          // Longer duration for smooth motion (Apple-like)
                }}
                {...props}
            >
                {/* Render each child with w-full */}
                {React.Children.map(children as any, (child, index) => (
                    <motion.div
                        className="w-full h-full flex-shrink-0"  // Make each child take full width
                        key={index}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
            <SliderBtns sliderLength={sliderLength} />
        </>
    );
};


/// slider btns
export const SliderBtns = ({ sliderLength }: { sliderLength: number; }) => {
    const { current, setCurrent } = useImageSliderContext();

    // Create an array of buttons based on the slider length
    const sliderArr = new Array(sliderLength).fill(null);  // Array with `sliderLength` elements

    return (
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center space-x-2 p-4">
            {sliderArr.map((_, index) => {
                const isActive = index === current;
                return (
                    <motion.button
                        key={index}
                        className={`w-3 h-3 cursor-pointer rounded-full bg-[#808080] box-border`}
                        style={{
                            background: isActive ? '#DB4444' : '#808080',
                            border: isActive ? '2px solid #fff' : '',

                        }}
                        onClick={() => setCurrent(index)}  // Update the current index when clicked
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }} // Staggering transition for the buttons
                    />
                );
            })}
        </div>
    );
};


/**
 * This function wrapp the image slider logic 
 * image slider depend's on current state that it is index of the array of slider element 
 * it plus + current by 1 every 5sec
 *  
 * @param props 
 * @returns 
 */
export const ImageSliderBody = (props: React.ComponentProps<typeof motion.div>) => (
    <ImageSlider {...props} />
)
