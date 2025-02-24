import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../../types";
import { RootState } from "../../store";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "asdfgjhjs",
      title: "Initialize Frontend",
      description: "Create Homepage, and routing",
      dueDate: "2025-02-25",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdfgjhjs",
      title: "Initialize Frontend",
      description: "Create Homepage, and routing",
      dueDate: "2025-02-25",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
