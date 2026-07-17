import axios from "axios";

const api = axios.create({
  baseURL: "https://aistudyassistantbackend.onrender.com/api",
  timeout: 30000,
});

export const generateStudyMaterial = async (prompt, signal) => {
  const response = await api.post(
    "/api/generate",
    { prompt },
    { signal }
  );

  return response.data;
};
