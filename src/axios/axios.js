import { LensTwoTone } from "@mui/icons-material";
import axios from "axios";

// Criação da instância do axios
const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  getUsers: () => api.get("user"),

  postLogin: (user) => api.post("login/", user),

  deleteUser: (id_usuario) => api.delete(`user/${id_usuario}`),

  getEventos: () => api.get("evento"),

  deleteEvent: (id_evento) => api.delete(`evento/${id_evento}`),
  createIngresso: (ingresso) => axios.post("/ingresso", ingresso),

  createEvento: (form, imagem) => {
    const data = new FormData();
    for (let key in form) data.append(key, form[key]);
    if (imagem) data.append("imagem", imagem);

    return api.post("/evento", data, {
      headers: {
        "Content-Type": "multipart/form-data", // Corrigido aqui
        Accept: "application/json",
      },
    });
  },
};

export default sheets;
