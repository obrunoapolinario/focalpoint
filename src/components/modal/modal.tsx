import styles from './modal.module.scss'

type ModalProps = {
    title: string
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
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
    );
}
