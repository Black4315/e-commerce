
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactDOM from "react-dom/client";
import React from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import { IoMdClose } from "react-icons/io";
import 'animate.css';
import { NextIntlClientProvider, useLocale } from "next-intl";
const MySwal = withReactContent(Swal);

export function showPop(content: React.ReactNode, isMobile: boolean , locale:string,messages:any) {

    MySwal.fire({
        html: `<div id="swal-react-root"></div>`,
        customClass: {
            htmlContainer: "max-sm:!p-0 h-full",
            container: "!p-0 ",
            popup:
                `swal2-no-padding !p-0 ${isMobile ? '!bg-black' : '!bg-white'} !w-screen !h-screen !rounded-none flex-center relative`,
        },
        showClass: {
            popup: `
                animate__animated
                animate__fadeInDown
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutUp
                animate__faster
            `
        },
        backdrop: false,
        showConfirmButton: false,
        showCloseButton: false,
        didClose() {
            document.body.style.overflow = "auto"

        },
        didOpen: () => {
            const container = document.getElementById("swal-react-root")
            document.body.style.overflow = "hidden"

            if (container) {
                const root = ReactDOM.createRoot(container);
                container.style.height = '100%'
                root.render(
                    <NextIntlClientProvider locale={locale} messages={messages}>

                        <div className="relative w-full h-full p-4 text-center">
                            {/* Close Button */}
                            <button
                                onClick={() => Swal.close()}
                                className="absolute top-4 right-4 text-gray-700 hover:text-black"
                            >
                                <CloseSvg />
                            </button>

                            {/* JSX Content */}
                            {content}
                        </div>
                    </NextIntlClientProvider>
                );
            }
        },
    });
}


function CloseSvg() {
    return <IoMdClose
        className="text-black w-6 h-6 cursor-pointer text-xl "
        aria-label="Close Sidebar"
        title="Close Sidebar"
        role="button"
    />
}