'use client'

import styles from './create-task.module.scss'
import { Button } from '@/components/button/button';
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { createContext, useContext, useState } from 'react';
import { Modal } from '../modal/modal';

interface CreateTaskProps {
  onClose: () => void;
}

export const CreateTask: React.FC<CreateTaskProps> = ({ onClose }) => {
    return (
        <>
            <form className={styles.create__form}>
                <div className={styles.create__form__input_container}>
                    <Label>Título</Label>
                    <Input placeholder="Digite" type="text" />
                </div>
                <div className={styles.create__form__input_container}>
                    <Button variant='primary'>Adicionar</Button>
                    <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                </div>
            </form>
        </>
    );
}

const ModalContext = createContext({ openModal: () => {}, closeModal: () => {} });

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal title='Nova tarefa' isOpen={isModalOpen} onClose={closeModal}>
        <CreateTask onClose={closeModal} />
      </Modal>
    </ModalContext.Provider>
  );
};