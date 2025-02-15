import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://the-best-link-backend.onrender.com";
axios.defaults.withCredentials = true;

export const fetchLinks = createAsyncThunk(
  "fetchLinks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/links");
      return response.data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLink = createAsyncThunk(
  "addLinks",
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
  "deleteLinks",
  async (linkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/tasks/${linkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
