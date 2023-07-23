import axios from "axios";

const viridisAuth = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true,
});

const viridisApi = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 10000,
})

export {viridisApi, viridisAuth};