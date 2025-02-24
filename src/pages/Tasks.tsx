import { AddTaskModal } from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TasksCard";
import { selectTasks } from "../redux/features/taskSlice/taskSlice";
import { useAppSelector } from "../redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  // const filter = useAppSelector(selectFilter);
  console.log(tasks);
  // console.log(filter);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h2>Tasks</h2>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
}
