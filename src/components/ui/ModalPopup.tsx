'use client';

import React, {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    ReactNode,
} from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import 'animate.css';
import { useMobileCheck } from '@/hooks/useMobileCheck';

const ModalContext = createContext<{
    showModal: (content: ReactNode, showAnim?: string, hidenim?: string) => void;
    closeModal: () => void;
} | null>(null);

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within ModalProvider');
    return ctx;
};


type ModalData = {
    content: ReactNode;
    showAnim: string;
    hideAnim: string;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalState, setModalState] = useState<ModalData | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const modalContainerRef = useRef<HTMLElement | null>(null);
    const isMobile = useMobileCheck()

    useEffect(() => {
        const container = document.createElement('div');
        container.id = 'modal-root';
        document.body.appendChild(container);
        modalContainerRef.current = container;

        return () => {
            document.body.removeChild(container);
        };
    }, []);

    const showModal = (
        content: React.ReactNode,
        showAnim = !isMobile ? 'animate_fadeInUp' : 'animate__slideInUp',
        hideAnim = !isMobile ? 'animate_fadeOutDown': 'animate__slideOutDown'
    ) => {
        setModalState({ content, showAnim, hideAnim });
        setIsClosing(false);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsClosing(true);
        document.body.style.overflow = 'auto';

        // Wait for fadeOutUp animation (~300ms) before unmounting
        setTimeout(() => {
            setModalState(null);
            setIsClosing(false);
        }, 550);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}

            {modalContainerRef.current && modalState &&
                ReactDOM.createPortal(
                    <>
                        <div
                            className={`modal-container p-0 flex-center fixed inset-0 z-50 ${isClosing && 'pointer-events-none'} ${isMobile && '!items-end'} `}
                        >
                            <div
                                aria-labelledby="modal-title"
                                aria-describedby="modal-html-container"
                                className={` forced-colors:border overflow-hidden modal-popup z-50 !p-0 bg-white flex-center relative animate__animated 
                                    ${!isMobile ? 'mx-4 rounded-xl h-[95svh] !w-fit lg:!h-fit' : "rounded-t-xl h-[85svh] w-screen "} 
                                    ${isClosing ? modalState.hideAnim : modalState.showAnim
                                    } animate__faster`}
                                role="dialog"
                                aria-modal="true"
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-700 hover:text-black z-10"
                                >
                                    <CloseSvg />
                                </button>

                                <div className={`w-full h-full p-4 md:p-6 text-center overflow-y-auto scrollbar-thin ${isMobile&&'!pb-0'}`}>
                                    {modalState.content}
                                </div>
                            </div>
                            <div className={`absolute top-0 bottom-0 right-0 left-0 bg-black/50 inset-0 transition-apple  animate__animated animate__faster ${isClosing ? 'animate__fadeOut' : 'animate__fadeIn'}`} onClick={closeModal}/>
                        </div>
                    </>,
                    modalContainerRef.current
                )}
        </ModalContext.Provider>
    );
};

function CloseSvg() {
    return (
        <IoMdClose
            className="text-black w-6 h-6 cursor-pointer text-xl"
            aria-label="Close Sidebar"
            title="Close Sidebar"
            role="button"
        />
    );
}
