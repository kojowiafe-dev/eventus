import axios from 'axios'


const api = axios.create({
    // baseURL: 'http://localhost:8000'
    baseURL: 'http://192.168.165.92:8000'
});


export default api;