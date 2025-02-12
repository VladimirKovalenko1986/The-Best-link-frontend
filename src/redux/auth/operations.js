import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://the-best-link-backend.onrender.com";
axios.defaults.withCredentials = true;

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      // 1. Створюємо FormData
      const formData = new FormData();

      // 2. Додаємо поля (текстові)
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("password", userData.password);

      // 3. Якщо є файл, додаємо
      if (userData.photo) {
        formData.append("photo", userData.photo);
      }

      // 4. Відправляємо multipart/form-data на бекенд
      const response = await axios.post("/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", userInfo);

      setAuthHeader(response.data.data.accessToken);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const sevedToken = reduxState.auth.token;

    setAuthHeader(sevedToken);

    const response = await axios.post("/auth/refresh");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();
      const sevedToken = reduxState.auth.token;
      return sevedToken !== null;
    },
  }
);
