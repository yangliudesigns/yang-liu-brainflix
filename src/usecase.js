import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

// 在所有请求中自动附加 API 密钥
api.interceptors.request.use((request) => {
    request.params = request.params || {};
    request.params.api_key = process.env.REACT_APP_API_KEY;
    return request;
});

export default api;






// const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
// const API_KEY = "3997877e-6e9c-4457-a46b-b1eb77309298";