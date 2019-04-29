import axios from 'axios';

export const baseURL = ``;

export const API = axios.create({
  baseURL: baseURL
});
