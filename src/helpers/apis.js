import axios from "axios";
import { token } from "../utils/token";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export async function register(form) {
  const response = await axios.post("https://api.mudoapi.tech/register", form);
  return response;
}

export async function login(form) {
  const response = await axios.post("https://api.mudoapi.tech/login", form);
  return response;
}

export async function getMenu(param) {
  const response = await axios.get(
    `https://api.mudoapi.tech/menus?name=&type=&perPage=5&page=${param}`
  );
  return response;
}

export async function addMenu(form) {
  const response = await axios.post(
    "https://api.mudoapi.tech/menu",
    form,
    config
  );
  return response;
}

export async function editMenu(param, form) {
  const response = await axios.put(
    `https://api.mudoapi.tech/menu/${param}`,
    form,
    config
  );
  return response;
}

export async function delMenu(param) {
  const response = await axios.delete(
    `https://api.mudoapi.tech/menu/${param}`,
    config
  );
  return response;
}
