import { configureStore } from "@reduxjs/toolkit";
import ResumeReducer from "../slicer/resumeSlicer";

export const store = configureStore({
  reducer: {
    resume: ResumeReducer,
  },
});
