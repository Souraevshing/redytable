import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SignUpFormData } from "@/schemas/SignUpSchema";

export const signUpUser = createAsyncThunk(
  "signup/signUpUser",
  async (formData: SignUpFormData, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/signUpUser/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        return rejectWithValue({
          status: res.status,
          message: error.message || "An error occurred",
        });
      }

      const data = await res.json();
      return data;
    } catch (error) {
      const err = error as Error;
      return rejectWithValue({
        status: 500,
        message: err.message || "Internal server error",
      });
    }
  }
);

const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    loading: true,
    error: null as { status: number; message: string } | null,
    user: null,
  },
  reducers: {
    resetSignUpState: (state) => {
      state.user = null;
      state.error = null;
      state.loading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = state.error;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as { status: number; message: string };
      });
  },
});

export const { resetSignUpState } = signUpSlice.actions;
export default signUpSlice.reducer;
