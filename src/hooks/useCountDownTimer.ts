import { calculateTimeLeft, TimeLeft } from "@/utils/claulateTimLeftTimer";
import { useEffect, useState } from "react";

export function useCountDownTimer(endDate: string | Date, onTimerEnd: () => void) {
    // State to store the time left
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(endDate));
    const [end, setEnd] = useState(false);


    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(endDate);
            setTimeLeft(newTimeLeft);

            // If time is up, clear the interval and call onTimerEnd
            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                clearInterval(intervalId);
                onTimerEnd();  // Call the function passed as prop
                setEnd(true)
            }
        }, 1000);

        return () => clearInterval(intervalId); // Clean up on unmount or endDate change
    }, [endDate]);

    return {
        timeLeft,
        end,
    }
}