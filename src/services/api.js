import axios from 'axios';
import { API_URL } from "@env";

export const url = API_URL;

export const api = axios.create({
  baseURL: url,
  timeout: 180000,
});

export default function setRequestToken(newToken) {
  if (newToken) api.defaults.headers = { Authorization: `Bearer ${newToken}` };
  else delete api.defaults.headers.Authorization;
}
