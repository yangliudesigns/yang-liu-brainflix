import axios from 'axios';

const config = {
    apiKey: "3997877e-6e9c-4457-a46b-b1eb77309298",
    endpoint: "http://localhost:8080/",
};

const api = axios.create({
    baseURL: config.endpoint,
});

// 在所有请求中自动附加 API 密钥
api.interceptors.request.use((request) => {
    request.params = request.params || {};
    request.params.api_key = config.apiKey;
    return request;
});

export default api;





// const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
// const API_KEY = "3997877e-6e9c-4457-a46b-b1eb77309298";