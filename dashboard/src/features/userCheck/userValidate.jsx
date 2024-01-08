import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const userValidationSlice = createSlice({
  name: "userValidation",
  initialState,
  reducers: {
    validateUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { validateUser } = userValidationSlice.actions;
export default userValidationSlice.reducer;
