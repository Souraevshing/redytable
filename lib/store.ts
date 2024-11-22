import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "@/lib/features/signInSlice";
import signUpReducer from "@/lib/features/signUpSlice";

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
  },
  devTools: true,
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
