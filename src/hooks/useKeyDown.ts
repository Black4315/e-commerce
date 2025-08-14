import { useEffect } from "react";

export function useKeyDown(
  key: KeyboardEvent["key"],
  fn: (event: KeyboardEvent) => void,
  deps: any[] = [],
  ele?: Element
) {
  useEffect(() => {
    const target = ele ?? window;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        fn(event);
      }
    }

    target.addEventListener("keydown", handleKeyDown as EventListener);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, deps);
}
