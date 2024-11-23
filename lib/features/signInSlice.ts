import { SignInFormData } from "@/schemas/SignInSchema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signInUser = createAsyncThunk(
  "login/loginUser",
  async (formData: SignInFormData, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/signInUser/`, {
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

const signInSlice = createSlice({
  name: "login",
  initialState: {
    loading: true,
    error: null as { status: number; message: string } | null,
    user: null,
  },
  reducers: {
    resetLoginState: (state) => {
      state.user = null;
      state.error = null;
      state.loading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as { status: number; message: string };
      });
  },
});

export const { resetLoginState } = signInSlice.actions;
export default signInSlice.reducer;
