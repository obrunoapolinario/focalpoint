'use client';

import styles from './task-list.module.scss';
import { useEffect, useMemo } from "react";
import { Button } from "../button/button";
import { CreateTaskForm } from "../create-task-form/create-task-form";
import { Task, TaskContainer, TaskContainerTitle } from "../tasks/tasks";
import { useModal } from "../modal/modal";
import { useTaskContext } from "../task-provider";

const TaskListContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className={styles.task_list__container}>
            {children}
        </div>
    );
}

export const TaskList: React.FC = () => {
    const { tasks, isLoading } = useTaskContext();
    const { registerModal, unregisterModal, openModal } = useModal();
    
    useEffect(() => {
        registerModal('createTask', {
            title: 'Nova tarefa',
            content: <CreateTaskForm />,
        });

        return () => {
            unregisterModal('createTask');
        };
    }, [registerModal, unregisterModal]);
    
    const incompleteTasks = useMemo(() => tasks.filter(task => !task.completed), [tasks]);
    const completedTasks = useMemo(() => tasks.filter(task => task.completed), [tasks]);

    if (isLoading) {
        return <p className={styles.task_list__message}>Carregando tarefas...</p>;
    }

    if (tasks.length === 0) {
        return (
            <TaskListContainer>
                <TaskContainer>
                    <p className={styles.task_list__message}>Ainda não existem tarefas, crie sua primeira 🚀</p>
                </TaskContainer>
                <Button variant="primary" onClick={() => openModal('createTask')}>Adicionar nova tarefa</Button>
            </TaskListContainer>
        );
    }
    
    return (
        <TaskListContainer>
            <TaskContainer>
                <TaskContainerTitle title="Suas tarefas de hoje" />
                {
                    incompleteTasks.length === 0 && <p className={styles.task_list__message}>Todas as tarefas foram concluídas 🎉</p>
                }
                {incompleteTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
                <TaskContainerTitle title="Tarefas concluídas" />
                {
                    completedTasks.length === 0 && <p className={styles.task_list__message}>Nenhuma tarefa concluída</p>
                }
                {completedTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </TaskContainer>
            <Button variant="primary" onClick={() => openModal('createTask')}>Adicionar nova tarefa</Button>
        </TaskListContainer>
    )
}