import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-groceries.haniframadhan.my.id",
  timeout: 5000,
});
