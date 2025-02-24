import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../../types";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
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
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
