import { gsap } from "@/gsap.config";

export default function useNavAnim(open: boolean, sidebarRef: any) {
    const el = sidebarRef.current;
    if (!el) return;

    const items = document.querySelectorAll(".nav-el");

    if (open) {
        gsap.to(el, {
          x: 0,
          duration: 0.3515,
          ease: "power3.out",
        });
        gsap.fromTo(
          items,
          { opacity: 0, x: -8 },
          {
            opacity: 1,
            x: 0,
            delay: 0.2515,
            duration: 0.3515,
            stagger: { each: 0.02 },
            ease: "easeS",
          }
        );
    } else {
        gsap.to(el, {
          x: -100,
          duration: 0.3515,
          ease: "power2.in",
        });
    }
}