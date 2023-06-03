import axios from "axios"
const SERVER_API = `${process.env.REACT_APP_API_URL}`;
export const backendApi = axios.create({
    baseURL: SERVER_API,
});