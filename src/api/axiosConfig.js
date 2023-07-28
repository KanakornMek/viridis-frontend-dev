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

viridisApi.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
        }
        return config
    },
    function (err) {
        return Promise.reject (err);
    }
)

viridisApi.interceptors.response.use(
    (response) => response,
    (err) => {
        if(err.response.status === 403){
            viridisAuth.post('/refresh')
                .then((res) => {
                    localStorage.setItem('accessToken', JSON.stringify(res.data.newAccessToken))
                }).err((err) => {
                    if(err.response.status === 403) {
                        localStorage.removeItem('accessToken');
                        window.location.href = '/'
                    }
                })
        }
    }
)
export {viridisApi, viridisAuth};