import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../utils/status";
import { toast } from "react-toastify";

// const tokenFromLocalStorage = localStorage.getItem("token");

const initialState = {
  token: null,
  user: {},
  status: STATUSES.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.status = STATUSES.IDLE;
      state.user = {};
      state.token = "";
      toast.success("Logged out successfully");
      // localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload === undefined) {
          console.log("not able to login");
          return;
        }
        state.token = action.payload.encodedToken;
        state.user = action.payload.foundUser;
        // localStorage.setItem("token", action.payload.encodedToken);
        toast.success(
          `Welcome ${action.payload.foundUser.firstName} ${action.payload.foundUser.lastName}`
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        toast.error("Unable to log in");
      })
      .addCase(signupUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        console.log("here");
        if (action.payload === undefined) {
          console.log("there");
          return;
        }
        console.log(action.payload);
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        // localStorage.setItem("token", action.payload.encodedToken);
        toast.success(
          `Welcome ${action.payload.createdUser.firstName} ${action.payload.createdUser.lastName}`
        );
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        toast.error("Unable to sign up");
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export const loginUser = createAsyncThunk(
  "/auth/login",
  async (data, thunkAPI) => {
    try {
      const { username, password } = data;
      const res = await axios.post("/api/auth/login", {
        username: username,
        password: password,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.error("Invalid User, not found");
        
      }
      if (error.response.status === 401) {
        toast.error("Wrong password");
      }
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "/auth/signup",
  async (data, thunkAPI) => {
    try {
      const { username, password, firstName, lastName } = data;
      const res = await axios.post("/api/auth/signup", {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      return res.data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Invalid User, not found");
      }
      if (error.response.status === 401) {
        toast.error("Wrong password");
      }
      thunkAPI.rejectWithValue(error);
    }
  }
);
