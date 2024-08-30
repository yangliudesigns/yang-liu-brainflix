import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, 
});

api.interceptors.request.use((request) => {
    request.params = request.params || {};
    request.params.api_key = "3997877e-6e9c-4457-a46b-b1eb77309298"; 
    return request;
});

export default api;








// const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
// const API_KEY = "3997877e-6e9c-4457-a46b-b1eb77309298";