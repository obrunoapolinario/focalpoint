import Header from "@/components/header/header";
import { Task } from "@/components/tasks/tasks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Task title="Lavar as mãos" completed={false} />
        <Task title="Lavar as mãos" completed />
      </main>
    </>
  );
}
