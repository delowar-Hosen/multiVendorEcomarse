import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  userValidationSlice  from "../userCheck/userValidate";

const reducers = combineReducers({
  user: userValidationSlice,
});

export const store = configureStore({
  reducer: reducers,
});
