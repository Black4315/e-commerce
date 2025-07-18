import React, { useEffect, useState } from "react";
import { calculateTimeLeft, TimeLeft } from "../utils/claulateTimLeftTimer";

const CountdownTimer: React.FC<{ endDate: string | Date; onTimerEnd: () => void }> = ({ endDate, onTimerEnd }) => {
    // State to store the time left
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(endDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(endDate);
            setTimeLeft(newTimeLeft);

            // If time is up, clear the interval and call onTimerEnd
            console.log(timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)
            console.log('new',(newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0))
            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                clearInterval(intervalId);
                onTimerEnd();  // Call the function passed as prop
            }
        }, 1000);

        return () => clearInterval(intervalId); // Clean up on unmount or endDate change
    }, [endDate]);

    // Display the time left
    return (
        <time dateTime={endDate.toString()} className="flex items-end relative">
            {Object.entries(timeLeft).map(([key, value], index) => (
                <React.Fragment key={key}>
                    <div className="flex flex-col gap-3 relative">
                        <span className="lg:absolute -top-6 font-poppins font-medium text-xs md:text-sm leading-4 capitalize">{key}</span>
                        <h2 className="heading font-bold leading-7">{value.toString().padStart(2,'0')}</h2>
                    </div>
                    {index < 3 && <span className="text-button-2 text-2xl font-extrabold mx-2 md:mx-4">:</span>}
                </React.Fragment>
            ))}
        </time>
    );
};
export default CountdownTimer