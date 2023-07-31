import axios from "axios";

const viridisAuth = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true,
});

const omise = axios.create({
    baseURL: 'https://api.omise.co/',
    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
    timeout: 1000,
    auth: {
        username: 'pkey_test_5ok93p8poxc9ociuead'
    }
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
        return Promise.reject(err);
    }
)

viridisApi.interceptors.response.use(
    (response) => response,
    async (err) => {
        if (err.response.status === 403) {
            try {
                const res = await viridisAuth.post('/refresh')
                localStorage.setItem('accessToken', JSON.stringify(res.data.newAccessToken))
            } catch (err) {
                if (err.response.status === 403) {
                    localStorage.removeItem('accessToken');
                    window.location.href = '/'
                }
            }

        }
    }
)
export { viridisApi, viridisAuth, omise };