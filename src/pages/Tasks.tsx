import {
  selectFilter,
  selectTasks,
} from "../redux/features/taskSlice/taskSlice";
import { useAppSelector } from "../redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div>
      <h2>This is tasks component</h2>
    </div>
  );
}
