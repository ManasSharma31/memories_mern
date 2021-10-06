import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:4000"
});
// this will help us to pass the user token at each and every request made by the user to the backend.
instance.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
})
export default instance;