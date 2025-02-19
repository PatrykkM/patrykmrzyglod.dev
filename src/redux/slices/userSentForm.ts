import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  correct: false,
  error: false,
};

export const isUserSent = createSlice({
  name: "isUserSent",
  initialState,
  reducers: {
    UserSentFormCorrectly: (state) => {
      state.correct = true;
    },
    UserSentFormError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { UserSentFormCorrectly, UserSentFormError } = isUserSent.actions;
