import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://the-best-link-backend.onrender.com";
axios.defaults.withCredentials = true;

export const fetchLinks = createAsyncThunk(
  "fetchLinks",
  async ({ page = 1, limit = 10, filter = "" }, thunkAPI) => {
    try {
      const response = await axios.get(`/links`, {
        params: { page, limit, nameType: filter },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLink = createAsyncThunk(
  "addLink",
  async (linkData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; // ✅ Отримуємо токен з Redux

    if (!token) {
      return thunkAPI.rejectWithValue("No access token available");
    }

    try {
      // 1. Створюємо FormData
      const formData = new FormData();

      // 2. Додаємо поля (текстові)
      formData.append("nameType", linkData.nameType);
      formData.append("link", linkData.link);
      formData.append("nameLink", linkData.nameLink);
      formData.append("textLink", linkData.textLink);
      // 3. Якщо є файл, додаємо
      if (linkData.poster) {
        formData.append("poster", linkData.poster);
      }
      const response = await axios.post("/links", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // ✅ Додаємо `Authorization`
        },
        withCredentials: true, // ✅ Передаємо cookies
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteLink = createAsyncThunk(
  "deleteLink",
  async (linkId, thunkAPI) => {
    try {
      await axios.delete(`/links/${linkId}`);
      return { id: linkId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editLink = createAsyncThunk(
  "editeLink",
  async ({ linkId, linkData }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No access token available");
    }

    try {
      // 1. Створюємо FormData
      const formData = new FormData();

      // 2. Додаємо поля (текстові)
      formData.append("nameType", linkData.nameType);
      formData.append("link", linkData.link);
      formData.append("nameLink", linkData.nameLink);
      formData.append("textLink", linkData.textLink);
      // 3. Якщо є файл, додаємо
      if (linkData.poster) {
        formData.append("poster", linkData.poster);
      }
      const response = await axios.patch(`/links/${linkId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // ✅ Додаємо `Authorization`
        },
        withCredentials: true, // ✅ Передаємо cookies
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
