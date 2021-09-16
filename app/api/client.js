import axios from "axios";
import baseURL from "../config/baseURL";

const client = axios.create({
    baseURL: baseURL,
});

export default client;
