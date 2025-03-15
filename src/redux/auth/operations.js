import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken, clearToken } from "./slice.js";

axios.defaults.baseURL = "https://the-best-link-backend.onrender.com";
axios.defaults.withCredentials = true;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const registration = createAsyncThunk(
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
    try {
      const response = await axios.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );

      const newAccessToken = response.data.data.accessToken;

      // ✅ Оновлюємо токен у Redux
      thunkAPI.dispatch(setToken(newAccessToken));

      // ✅ Оновлюємо заголовок авторизації
      setAuthHeader(newAccessToken);

      return { token: newAccessToken, user: response.data.data.user };
    } catch (error) {
      console.log("Failed to refresh token:", error);
      thunkAPI.dispatch(clearToken());
      return thunkAPI.rejectWithValue("Session expired");
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      return !!auth.token; // Виконуємо refresh тільки якщо токен є
    },
  }
);

export const sendEmailResetPassword = createAsyncThunk(
  "auth/request-reset-email",
  async ({ email }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/request-reset-email", { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async ({ token, password }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/reset-password", {
        token,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGoogleOAuthUrl = createAsyncThunk(
  "auth/get-oauth-url",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/auth/get-oauth-url");
      return response.data.data.url;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  "auth/confirm-oauth",
  async (code, thunkAPI) => {
    try {
      const response = await axios.post("/auth/confirm-oauth", { code });

      // ✅ Переконайся, що дані отримуються правильно
      const user = response.data?.data?.user;
      const accessToken = response.data?.data?.accessToken;

      if (!user || !accessToken) {
        throw new Error("Invalid user data from Google login");
      }

      setAuthHeader(accessToken);

      return { user, accessToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Google login failed"
      );
    }
  }
);
