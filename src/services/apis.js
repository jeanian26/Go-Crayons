//apis.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
