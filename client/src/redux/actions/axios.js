import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:4000/posts"
});
export default instance;