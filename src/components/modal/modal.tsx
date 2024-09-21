'use client';

import styles from './modal.module.scss'
import React, { createContext, useContext, useState, useCallback } from 'react';

type ModalProps = {
    title: string
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className={styles.modal_overlay}>
                <div className={styles.modal}>
                    <div className={styles.modal__content}>
                        <div className={styles.modal__header}>
                            <h2 className={styles.modal__header_title}>{title}</h2>
                        </div>
                        <div className={styles.modal__body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


interface ModalConfig {
    title: string;
    content: React.ReactNode;
}

interface ModalContextType {
    registerModal: (key: string, config: ModalConfig) => void;
    unregisterModal: (key: string) => void;
    openModal: (key: string) => void;
    closeModal: (key: string) => void;
}

const ModalContext = createContext<ModalContextType>({
    registerModal: () => {},
    unregisterModal: () => {},
    openModal: () => {},
    closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modals, setModals] = useState<Record<string, ModalConfig & { isOpen: boolean }>>({});

    const registerModal = useCallback((key: string, config: ModalConfig) => {
        setModals(prevModals => ({
            ...prevModals,
            [key]: { ...config, isOpen: false },
        }));
    }, []);

    const unregisterModal = useCallback((key: string) => {
        setModals(prevModals => {
            const newModals = { ...prevModals };
            delete newModals[key];
            return newModals;
        });
    }, []);

    const openModal = useCallback((key: string) => {
        setModals(prevModals => ({
            ...prevModals,
            [key]: { ...prevModals[key], isOpen: true },
        }));
    }, []);

    const closeModal = useCallback((key: string) => {
        setModals(prevModals => ({
            ...prevModals,
            [key]: { ...prevModals[key], isOpen: false },
        }));
    }, []);

    return (
        <ModalContext.Provider value={{ registerModal, unregisterModal, openModal, closeModal }}>
            {children}
            {Object.entries(modals).map(([key, { title, content, isOpen }]) => (
                <Modal key={key} title={title} isOpen={isOpen} onClose={() => closeModal(key)}>
                    {content}
                </Modal>
            ))}
        </ModalContext.Provider>
    );
};
