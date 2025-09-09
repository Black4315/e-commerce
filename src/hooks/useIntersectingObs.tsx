import { RefObject, useEffect, useState } from "react";

export function useIntersectingObs(observEle: HTMLElement | null) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      { threshold: 0 }
    );
  
    if (observEle) observer.observe(observEle);

    return () => {
      if (observEle) observer.unobserve(observEle);
    };
  }, [observEle]);

  return {
    hide,
    observEle,
  };
}