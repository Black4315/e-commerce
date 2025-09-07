// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// // Optional: configure NProgress
// NProgress.configure({ showSpinner: false, speed: 400 });

// export default function RouteProgress() {
//     const pathname = usePathname();

//     useEffect(() => {
//         if (!pathname) return;

//         // Start immediately when pathname changes
//         NProgress.start();

//         // Complete after render
//         NProgress.done();

//     }, [pathname]);

//     return null;
// }
