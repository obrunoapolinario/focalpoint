import styles from './tasks.module.scss';
import { TrashIcon } from "@/app/icons/trash";

type TaskProps = {
    title: string;
    completed: boolean;
}

export const Task: React.FC<TaskProps> = ({ title, completed }) => {
    return (
        <div className={styles.task}>
            <input type="checkbox" defaultChecked={completed} className={styles.task__completed_checkbox} />
            <span className={completed ? styles.task__completed : ''}>{title}</span>
            <TrashIcon />
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
