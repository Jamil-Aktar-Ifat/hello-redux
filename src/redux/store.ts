import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/taskSlice/taskSlice";
// import logger from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer, 
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
