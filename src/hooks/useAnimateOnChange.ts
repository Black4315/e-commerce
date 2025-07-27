import { useEffect, useRef, useState } from "react";

export function useAnimateOnChange(value:any, duration = 850) {
    const [animate, setAnimate] = useState(false);
    const prev = useRef(value);

    useEffect(() => {
        if (value !== prev.current) {
            setAnimate(true);
            prev.current = value;
            const timeout = setTimeout(() => setAnimate(false), duration);
            return () => clearTimeout(timeout);
        }
    }, [value]);

    return animate;
}
