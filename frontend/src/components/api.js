import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  // baseURL: 'http://localhost:8000',
  baseURL: 'http://192.168.77.92:8000',
=======
  baseURL: 'http://localhost:8000',
  // baseURL: 'http://10.11.24.7:8000',
>>>>>>> 29d836f9a20e0386b203069921f3c993950a5f31
});

export default api;
