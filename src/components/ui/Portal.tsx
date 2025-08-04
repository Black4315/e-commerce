import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    children: ReactNode;
    container?: Element | null;
};

export function Portal({ children, container }: PortalProps) {
    if (typeof window === 'undefined') {
        return null;
    }
    const containerNode = container || document.body;
    return createPortal(children, containerNode);
}