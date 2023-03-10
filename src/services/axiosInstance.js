import axios from 'axios';

const axiosInstance = axios.create({
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: false,
    clarifyTimeoutError: false,
  },
  transformResponse: [function transformResponse(data) {
    return JSON.parse(data, (k, v) => (v === null ? undefined : v));
  }],
});

// 请求拦截
axiosInstance.interceptors.request.use(config => config);

// 响应拦截
axiosInstance.interceptors.response.use(response => response);

export default axiosInstance;
