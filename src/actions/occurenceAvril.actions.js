import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendApi } from "../api";


export const getTop10UsedWordsAvril = createAsyncThunk(
  "top10UsedWordsAvril/get",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await backendApi.get("/top10UsedWordsAvril");
      return data;
    } catch (error) {
      if (error.response) {
        // Récupérez uniquement les informations pertinentes de l'erreur de réponse
        const { status, data } = error.response;
        return rejectWithValue({ status, data });
      } else if (error.request) {
        // Gérez l'erreur de demande
        return rejectWithValue({ message: "Request failed", error: error.message });
      } else {
        // Gérez toute autre erreur
        return rejectWithValue({ message: "Something went wrong", error: error.message });
      }
    }
  }
);
