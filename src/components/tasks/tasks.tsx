import { type Task as TaskType } from '@/hooks/use-tasks';
import { useModal } from '../modal/modal';
import styles from './tasks.module.scss';
import { TrashIcon } from "@/app/icons/trash";
import { DeleteTask } from '../delete-task/delete-task';
import { useEffect } from 'react';
import { useTaskContext } from '../task-provider';

type TaskProps = {
    task: TaskType;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
    const { openModal, registerModal, unregisterModal } = useModal();
    const { toggleTaskCompletion } = useTaskContext();

    useEffect(() => {
        registerModal(`deleteTask-${task.id}`, {
            title: 'Deletar tarefa',
            content: <DeleteTask taskId={task.id} />,
        });

        return () => {
            unregisterModal(`deleteTask-${task.id}`);
        };
    }, [task.id, registerModal, unregisterModal]);

    return (
        <div className={styles.task}>
            <input type="checkbox" defaultChecked={task.completed} className={styles.task__completed_checkbox} onChange={() => toggleTaskCompletion(task.id)} />
            <span className={task.completed ? styles.task__completed : ''}>{task.title}</span>
            <button onClick={() => openModal(`deleteTask-${task.id}`)} className={styles.task__delete_btn}>
                <TrashIcon />
            </button>
        </div>
    );
}

export const TaskContainer: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className={styles.task__container}>
            {children}
        </div>
    );
}

export const TaskContainerTitle: React.FC<{title: string}> = ({ title }) => {
    return (
        <h2 className={styles.task__container__title}>{title}</h2>
    );
}
