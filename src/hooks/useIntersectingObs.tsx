import { RefObject, useEffect, useState } from "react";

export function useIntersectingObs(observRef: RefObject<HTMLElement | null>) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      { threshold: 0 }
    );
  
    if (observRef.current) observer.observe(observRef.current);

    return () => {
      if (observRef.current) observer.unobserve(observRef.current);
    };
  }, [observRef.current]);

  return {
    hide,
    observRef,
  };
}