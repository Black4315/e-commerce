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
        showAnim = 'animate__fadeInDown',
        hideAnim = 'animate__fadeOutUp'
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
        }, 300);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}

            {modalContainerRef.current && modalState &&
                ReactDOM.createPortal(
                    <>
                        <div
                            className="modal-container p-0 flex-center fixed inset-0 z-50"
                        >
                            <div
                                aria-labelledby="modal-title"
                                aria-describedby="modal-html-container"
                                className={`modal-popup z-50 !p-0 bg-white !w-fit !h-fit rounded-xl flex-center relative animate__animated ${isClosing ? modalState.hideAnim : modalState.showAnim
                                    } animate__faster`}
                                role="dialog"
                                aria-modal="true"
                                style={{ display: 'grid' }}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-700 hover:text-black z-10"
                                >
                                    <CloseSvg />
                                </button>

                                <div className="w-full h-full p-4 md:p-6 text-center overflow-auto">
                                    {modalState.content}
                                </div>
                            </div>
                            <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/50 inset-0 ' onClick={closeModal}/>
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
