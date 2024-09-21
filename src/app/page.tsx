import Header from "@/components/header/header";
import { ModalProvider } from "@/components/modal/modal";
import { TaskList } from "@/components/task-list/task-list";
import { TaskProvider } from "@/components/task-provider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TaskProvider>
          <ModalProvider>
            <TaskList />
          </ModalProvider>
        </TaskProvider>
      </main>
    </>
  );
}
