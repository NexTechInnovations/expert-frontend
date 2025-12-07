import React, { useState, useCallback } from 'react';
import ConfirmationModal from '../components/ui/ConfirmationModal';

interface ModalProps {
    title: string;
    description: string;
    onConfirm: () => Promise<void>;
    confirmText?: string;
    isDestructive?: boolean;
}

export const useConfirmationModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const openModal = useCallback((props: ModalProps) => {
        setModalProps(props);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setModalProps(null), 300);
    }, []);

    const handleConfirm = async () => {
        if (modalProps?.onConfirm) {
            setIsLoading(true);
            try {
                await modalProps.onConfirm();
            } finally {
                setIsLoading(false);
                closeModal();
            }
        }
    };

    const ConfirmationModalComponent = modalProps ? (
        <ConfirmationModal
            isOpen={isOpen}
            onClose={closeModal}
            onConfirm={handleConfirm}
            title={modalProps.title}
            description={modalProps.description}
            confirmText={modalProps.confirmText}
            isDestructive={modalProps.isDestructive}
            isLoading={isLoading}
        />
    ) : null;

    return { openModal, ConfirmationModalComponent };
};