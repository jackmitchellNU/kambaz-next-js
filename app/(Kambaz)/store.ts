import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import helloReducer from "../Labs/Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Labs/Lab4/ReduxExamples/CounterRedux/CounterReducer";
import addReducer from "../Labs/Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Labs/Lab4/ReduxExamples/todos/todosReducer";

const store = configureStore({
 reducer: { 
   coursesReducer, 
   modulesReducer,
   assignmentsReducer,
   accountReducer,
   helloReducer,
   counterReducer,
   addReducer,
   todosReducer,
 },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;