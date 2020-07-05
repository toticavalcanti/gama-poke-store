import axios from 'axios';

const api = axios.create();
export const apiType = axios.create({
baseURL:'',
});

export default api;

