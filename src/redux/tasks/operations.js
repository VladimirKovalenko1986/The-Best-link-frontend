import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://the-best-link-backend.onrender.com/";

export const fetchLinks = createAsyncThunk(
  "fetchAllLinks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("tasks/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLink = createAsyncThunk(
  "addLinks",
  async (newLink, thunkAPI) => {
    try {
      const response = await axios.post("/tasks/tasks", newLink);
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
