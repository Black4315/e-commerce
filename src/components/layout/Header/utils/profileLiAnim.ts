import gsap from "gsap"

export const anim = (open: boolean) => {
    if (open) {
        gsap.fromTo('.profile-menu-li', {
            y: -10,
            opacity: 0,
            scale: 0.95,
        }, {
            y: 0,
            scale: 1,
            delay: 0.2,
            duration: 0.1,
            stagger: {
                each: 0.1,
                from: 'start',
                grid: 'auto',
                // ease: 'none',
            },
            ease: "cubic-bezier(0, 0, .5, 1);",
            opacity: 1,
        })
    } else {
        gsap.to('.profile-menu-li', {
            y: -10,
            opacity: 0,
            scale: 0.95,
            duration: 0.2,
            ease: "power2.inOut",
            stagger: {
                each: 0.03,
                from: "end",
            },
        })
    }

}