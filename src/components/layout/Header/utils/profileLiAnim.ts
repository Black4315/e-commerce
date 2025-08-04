import { gsap } from "@/gsap.config";

export const anim = (open: boolean) => {

    const targets = '.profile-menu-li';
    const duration = 0.24;
    const staggerAmount = 0.05;

    if (open) {
        gsap.fromTo(targets, {
            y: -10,
            opacity: 0,
            scale: 0.95,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: 0.1,
            ease: "back.out(1,2)",
            stagger: {
                each: staggerAmount,
                from: 'start',
            }
        });
    } else {
        gsap.to(targets, {
            y: -5,
            opacity: 0,
            scale: 0.95,
            duration: duration * 0.7,
            ease: "power2.in",
            stagger: {
                each: staggerAmount,
                from: "end",
            }
        });
    }
};