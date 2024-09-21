import { useState, useEffect, useCallback } from 'react';

export type Task = {
    id: number;
    title: string;
    completed: boolean;
}

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTasks = () => {
            const storedTasks = localStorage.getItem('tasks');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
            setIsLoading(false);
        };
        loadTasks();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks, isLoading]);

    const addTask = useCallback((title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTasks(prevTasks => {
            return [...prevTasks, newTask];
        });
    }, []);

    const deleteTask = useCallback((id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }, []);

    const toggleTaskCompletion = useCallback((id: number) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }, [setTasks]);

    return { tasks, addTask, deleteTask, toggleTaskCompletion, isLoading };
};