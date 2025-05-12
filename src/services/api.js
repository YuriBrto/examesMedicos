// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/exames', // Altere para o endereço correto da sua API
  timeout: 10000,
});

export default api;
