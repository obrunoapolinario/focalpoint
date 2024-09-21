import styles from './delete-task.module.scss'
import { Button } from '../button/button';
import { useModal } from '../modal/modal';
import { useTaskContext } from '../task-provider';

interface DeleteTaskProps {
    taskId: number;
}

export const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId }) => {
    const { closeModal } = useModal();
    const { deleteTask } = useTaskContext();

    const handleDelete = () => {
        deleteTask(taskId);
        closeModal(`deleteTask-${taskId}`);
    };

    return (
        <div className={styles.actions}>
            <p>Você tem certeza que você deseja deletar essa tarefa?</p>
            <div className={styles.actions__container}>
                <Button variant="danger" onClick={handleDelete}>Deletar</Button>
                <Button onClick={() => closeModal(`deleteTask-${taskId}`)} variant='ghost'>Cancelar</Button>
            </div>
        </div>
    );
}