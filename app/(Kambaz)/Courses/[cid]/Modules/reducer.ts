import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}

interface Lesson {
  _id: string;
  name: string;
  description?: string;
  module: string;
}

interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },

    addModule: (state, action: PayloadAction<Partial<Module>>) => {
      const payload = action.payload;
      const newModule: Module = {
        _id: uuidv4(),
        lessons: [],
        name: (payload.name as string) || "",
        course: (payload.course as string) || "",
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.filter((m: Module) => m._id !== moduleId);
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      const updated = action.payload;
      state.modules = state.modules.map((m: Module) => (m._id === updated._id ? updated : m));
    },
    editModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.map((m: Module) => (m._id === moduleId ? { ...m, editing: true } : m));
    },
  },
});
export const { setModules, addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;