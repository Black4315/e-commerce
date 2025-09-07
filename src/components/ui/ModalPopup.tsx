"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import "animate.css";
import { useMobileCheck } from "@/contexts/MobileCheckContext";
import { Portal } from "./Portal";
import { cn } from "@/lib/utils";

type classes = {
  container?: string;
  popup?: string;
  backdrop?: string;
  closeBtn?: string;
};

type ModalData = {
  content: ReactNode;
  classes?: classes;
  showAnimClasses?: classes;
  hideAnimClasses?: classes;
  portalcontainer?: Element | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalPopup = ({
  content,
  classes,
  showAnimClasses,
  hideAnimClasses,
  portalcontainer,
  isOpen,
  onClose,
}: ModalData) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalContainerRef = useRef<HTMLElement | null>(null);
  const isMobile = useMobileCheck();

  const showAnim =
    showAnimClasses?.popup ??
    (!isMobile ? "animate_fadeInUp" : "animate__slideInUp");
  const hideAnim =
    hideAnimClasses?.popup ??
    (!isMobile ? "animate_fadeOutDown" : "animate__slideOutDown");

  // This effect creates and cleans up the portal container
  useEffect(() => {
    if (portalcontainer) return;

    let container = document.getElementById("modal-root");
    if (!container) {
      container = document.createElement("div");
      container.id = "modal-root";
      document.body.appendChild(container);
    }

    container.style.position = "fixed";
    container.style.zIndex = "1000";
    modalContainerRef.current = container;
  }, []);

  let openModalCount = 0;

  function lockBodyScroll() {
    if (openModalCount === 0) {
      document.body.style.overflow = "hidden";
    }
    openModalCount++;
  }

  function unlockBodyScroll() {
    openModalCount = Math.max(openModalCount - 1, 0);
    if (openModalCount === 0) {
      document.body.style.overflow = "auto";
    }
  }

  // Inside your component:
  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
      return () => unlockBodyScroll();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for hide animation to finish before calling parent's onClose
    // and let the parent unmount the modal
    setTimeout(() => {
      onClose(); // This call will set the parent's state to close the modal
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 550); // The duration of your animation
  };

  return (
    isOpen && (
      <Portal container={modalContainerRef.current || portalcontainer}>
        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            `modal-container p-0 flex justify-center fixed inset-0`,
            isClosing ? hideAnimClasses?.container : showAnimClasses?.container,
            isClosing && "pointer-events-none",
            !isMobile ? "py-3 overflow-y-auto custom-scroll" : "!items-end",
            classes?.container
          )}
        >
          <div
            aria-labelledby="modal-title"
            aria-describedby="modal-html-container"
            className={cn(
              `forced-colors:border overflow-hidden modal-popup z-50 !p-0 bg-white flex justify-center items-center relative animate__animated animate__faster`,
              !isMobile
                ? "mx-4 rounded-xl w-fit lg:h-fit my-auto"
                : "rounded-t-xl h-[85svh] w-screen",
              isClosing ? hideAnim : showAnim,
              classes?.popup
            )}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={handleClose}
              className={cn(
                "absolute top-4 right-4 text-gray-700 hover:text-black z-10",
                isClosing
                  ? hideAnimClasses?.closeBtn
                  : showAnimClasses?.closeBtn,
                classes?.closeBtn,
                isMobile && "top-2 right-2"
              )}
            >
              <CloseSvg />
            </button>

            <div
              className={`w-full h-full p-3 md:p-4 text-center overflow-y-auto scrollbar-thin ${
                isMobile && "!pb-0 max-md:p-3"
              }`}
            >
              {content}
            </div>
          </div>

          {/* back drop */}
          <div
            className={cn(
              `fixed top-0 bottom-0 start-0 end-0 bg-black/50 transition-apple animate__animated animate__faster`,
              isClosing
                ? hideAnimClasses?.backdrop || "animate__fadeOut"
                : showAnimClasses?.backdrop || "animate__fadeIn",
              classes?.backdrop
            )}
            onClick={handleClose}
          />
        </div>
      </Portal>
    )
  );
};

export function CloseSvg() {
  return (
    <IoMdClose
      className="text-black w-6 h-6 cursor-pointer text-xl"
      aria-label="Close Sidebar"
      title="Close Sidebar"
      role="button"
    />
  );
}
