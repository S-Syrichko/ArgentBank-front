import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { User, PartialUserData } from "./DataTypes";

export const loginAPI = createAsyncThunk(
  "user/loginAPI",
  async ({ email, password }: User) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (err) {

      if (axios.isAxiosError(err)) {
        if (err.response) {
          throw err.response?.data;
        } else {
          throw new Error("Server is not responding 🙁");
        }
      } else {
        throw err;
      }
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.token;
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ firstName, lastName }: PartialUserData, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.token;
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName,
          lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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