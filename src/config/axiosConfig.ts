import axios from "axios";

export const axiosBase = axios.create({
  baseURL: 'https://api.kinopoisk.dev/',
  headers: {'X-API-KEY': 'WA3KVNB-04CMS6X-M3915GR-6ABHD93'}
});