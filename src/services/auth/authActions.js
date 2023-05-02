// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Common from "../../components/common";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        // `${backendURL}/api/v2/auth/login`,
        `https://dev-api.internal.luminateapp.io/api/v1/auth/login`,
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", JSON.stringify(data.data?.token));
      localStorage.setItem("refreshToken", data.data?.refreshToken);
      Common.notifications("Success", "Login Successfully !", "success");

      return data;
    } catch (error) {
      // toast.error("Invalid email or password.");
      Common.notifications("Error", error.response.data.message, "error");
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
