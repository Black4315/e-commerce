import gsap from "gsap";

export default function useNavAnim(open: boolean, sidebarRef: any) {
    const el = sidebarRef.current;
    if (!el) return;

    const items = document.querySelectorAll(".nav-item");

    if (open) {
        gsap.to(el, {
            x: 0,
            duration: 0.4,
            ease: "power3.out",
        });
        gsap.fromTo(
            items,
            { opacity: 0, x: "-100%" },
            {
                opacity: 1,
                x: 0,
                delay: 0.1,
                duration: 0.5,
                stagger: { each: 0.07 },
                ease: "power3.out",
            }
        );
    } else {
        gsap.to(el, {
            x: -100,
            duration: 0.2,
            ease: "power2.in",
        });
    }
}