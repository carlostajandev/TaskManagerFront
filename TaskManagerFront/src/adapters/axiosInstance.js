import axios from 'axios';

const BASE_URL = 'https://taskmanagerv1-aca2bkfzbqfrega0.westus-01.azurewebsites.net/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
