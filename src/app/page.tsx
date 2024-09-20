"use client"
import Header from "@/components/header/header";
import { Modal } from "@/components/modal/modal";
import { Task, TaskContainer, TaskContainerTitle } from "@/components/tasks/tasks";
import { Button } from "@/components/button/button";
import { CreateTask, ModalProvider } from "@/components/create-task/create-task";
import { useState } from "react";
import { TaskList } from "@/components/task-list/task-list";

export default function Home() {
    const mockTasks = [
      { title: "Lavar as mãos", completed: false },
      { title: "Lavar a louça", completed: true },
      { title: "Levar o lixo para fora", completed: false },
      { title: "Passear com o cachorro", completed: false },
  ]
  return (
    <>
      <Header />
      <main>
        <ModalProvider>
          <TaskList />
        </ModalProvider>
      </main>
    </>
  );
}
