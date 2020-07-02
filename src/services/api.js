import axios from 'axios';

const api = axios.create();
export const apiType = axios.create({
baseURL:'https://pokeapi.co/api/v2/type/',
});

export default api;

