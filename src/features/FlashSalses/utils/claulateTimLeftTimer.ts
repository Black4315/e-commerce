export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}


/**
 * Calculate the time left until a specific end date.
 * 
 * @param {string | Date} endDate - The end date to count down to. Can be a Date object or a string that can be parsed into a Date.
 * @returns {TimeLeft} An object containing the number of days, hours, minutes, and seconds remaining until the specified `endDate`.
 * 
 * @throws {Error} Will throw an error if the `endDate` is invalid.
 */
export const calculateTimeLeft = (endDate: string | Date): TimeLeft => {
    const now = new Date();
    const targetDate = new Date(endDate);

    // Ensure the target date is valid
    if (isNaN(targetDate.getTime())) {
        throw new Error("Invalid end date");
    }

    const difference = targetDate.getTime() - now.getTime();

    // If time has passed, return zeros
    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate time left
    const timeLeft: TimeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft
};
