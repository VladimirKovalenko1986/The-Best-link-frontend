import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.default.baseURL = "https://the-best-link-backend.onrender.com/";

export const register = createAsyncThunk("auth/register", async () => {});

export const logIn = createAsyncThunk("auth/login", async () => {});

export const logOut = createAsyncThunk("auth/logout", async () => {});
