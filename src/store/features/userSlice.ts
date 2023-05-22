import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export interface User {
  email: string;
  password: string;
}


export const loginAPI = createAsyncThunk(
  "user/loginAPI",
  async ({ email, password }:User) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw err.response?.data;
      } else {
        throw err;
      }
    }
  }
);


export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (token) => {
    try {
      const response = await axios.get("https://localhost:3001/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw err.response?.data;
      } else {
        throw err;
      }
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    loginStatus: "idle",
    profileStatus: "idle",
    token: null,
    profileContent: null,
    loginError: null as string | undefined | null,
    profileError: null as string | undefined | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //user/loginAPI
    builder.addCase(loginAPI.pending, (state) => {
      state.loginStatus = "fetching";
      state.loginError = null;
    });
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      state.loginStatus = "resolved";
      state.token = action.payload.body.token;
    });
    builder.addCase(loginAPI.rejected, (state, action) => {
      state.loginStatus = "rejected";
      state.loginError = action.error.message;
    });

    //user/fetchUserProfile
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.profileStatus = "fetching";
      state.profileError = null;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profileStatus = "resolved";
      state.profileContent = action.payload;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.profileStatus = "rejected";
      state.profileError = action.error.message;
    });
  },
});

export default UserSlice.reducer;

