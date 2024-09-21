'use client';

import React, { createContext, useContext } from 'react';
import { useTasks, Task } from '@/hooks/use-tasks';

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  isLoading: boolean;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const taskMethods = useTasks();

  return (
    <TaskContext.Provider value={taskMethods}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
