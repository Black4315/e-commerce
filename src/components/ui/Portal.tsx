"use client";

import { useHydrated } from '@/hooks/useHydrated';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    children: ReactNode;
    container?: Element | null;
};

export function Portal({ children, container }: PortalProps) {
    const { hydrated } = useHydrated()
    if (typeof window === "undefined" || !hydrated)  return null;

    const containerNode = container || document.body;
    return createPortal(children, containerNode);
}