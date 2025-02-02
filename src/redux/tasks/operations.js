import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://the-best-link-backend.onrender.com/";

export const fetchTasks = createAsyncThunk(
  "fetchAllTasks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("tasks/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "addTask",
  async (newTask, thunkAPI) => {
    try {
      const response = await axios.post("/tasks/tasks", newTask);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
