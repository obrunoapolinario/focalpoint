import { Button } from "../button/button";
import { useModal } from "../create-task/create-task";
import { Task, TaskContainer, TaskContainerTitle } from "../tasks/tasks";

export const TaskList = () => {
    const { openModal } = useModal();
    const mockTasks = [
        { title: "Lavar as mãos", completed: false },
        { title: "Lavar a louça", completed: true },
        { title: "Levar o lixo para fora", completed: false },
        { title: "Passear com o cachorro", completed: false },
    ]

    return (
        <>
            <TaskContainer>
                <TaskContainerTitle title="Suas tarefas de hoje" />
                {mockTasks.map((task, index) => (
                    !task.completed && <Task key={index} title={task.title} completed={task.completed} />
                ))}
                <TaskContainerTitle title="Tarefas concluídas" />
                {mockTasks.map((task, index) => (
                    task.completed && <Task key={index} title={task.title} completed={task.completed} />
                ))}
            </TaskContainer>
            <Button variant="primary" onClick={openModal}>Adicionar nova tarefa</Button>
        </>
    )
}