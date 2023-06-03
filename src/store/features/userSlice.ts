import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "typescript-cookie";
import { UserState } from "./DataTypes";
import { loginAPI, fetchUserProfile, updateUserProfile } from "./thunks";


const initialState: UserState = {
  isLogged: false,
  loginStatus: "idle",
  profileStatus: "idle",
  token: getCookie("token") || null,
  userData: {
    id: undefined,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
  },
  loginError: null,
  profileError: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: () => {
      return {
        ...initialState,
        token: null,
      };
    },
  },
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
      state.userData.id = action.payload.body.id;
      state.userData.email = action.payload.body.email;
      state.userData.firstName = action.payload.body.firstName;
      state.userData.lastName = action.payload.body.lastName;
      state.isLogged = true;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.profileStatus = "rejected";
      state.profileError = action.error.message;
    });

    //user/updateUserProfile
    builder.addCase(updateUserProfile.pending, (state) => {
      state.profileStatus = "fetching";
      state.profileError = null;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.profileStatus = "resolved";
      state.userData.firstName = action.payload.body.firstName;
      state.userData.lastName = action.payload.body.lastName;
      state.isLogged = true;
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.profileStatus = "rejected";
      state.profileError = action.error.message;
    });
  },
});

export const { setToken, logout } = UserSlice.actions;
export default UserSlice.reducer;
