import axios from "axios";
import { useAuthStore } from "../Store/authStore.js"; // Ruta al archivo que define y exporta el store de autenticación

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Reemplaza con la URL base de tu API
  timeout: 5000, // Opcional: tiempo máximo de espera para las solicitudes
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore(); // Accede al store de autenticación de Pinia
  const token = authStore.token; // Obtén el token de autenticación del store

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Agrega el token al encabezado de autorización
  }

  return config;
});

export default api;
