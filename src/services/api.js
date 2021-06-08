// import axios from 'axios';
import { API_URL } from "@env";
import apisauce from 'apisauce'

export const url = API_URL;

export const api = apisauce.create({
  baseURL: url,
  timeout: 180000,
});

api.axiosInstance.interceptors.response.use((response) => {
  const requestInteceptor = response.data;

  if (requestInteceptor?.message) {
    if (requestInteceptor?.throwException) {
      console.log("Mostra alerta de erro e para o fluxo");
      return Promise.reject(Error('401'));
    }
    console.log("Mostra alerta de erro e segue o fluxo");
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default function setRequestToken(newToken) {
  if (newToken) api.defaults.headers = { Authorization: `Bearer ${newToken}` };
  else delete api.defaults.headers.Authorization;
}

// setRequestToken(getLoggedInOperatorToken());
