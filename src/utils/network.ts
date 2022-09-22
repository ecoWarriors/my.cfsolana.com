import axios from "axios";

console.log('is production?', import.meta.env.PROD);

const getUrlForEnv = () => {
  return import.meta.env.PROD === true ? 'https://staging.cfsolana.com/' : 'http://127.0.0.1:8080';
}

const axiosInstance = axios.create({
  baseURL: getUrlForEnv(),
  headers: {
    "Content-type": "application/json"
  }
});

// Request interceptors for API calls
axiosInstance.interceptors.request.use(
  (config: any) => {
    try {
      const auth: string = localStorage.getItem('auth') || '';

      const parsedAuth = JSON.parse(auth);

      if (!parsedAuth || !parsedAuth.token || !parsedAuth.token.tokens) {
        return config;
      }

      const accessToken = parsedAuth.token.tokens.access_token;
      config.headers['x-auth-token'] = accessToken;
      return config;
    } catch (error) {
      console.log(error);
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;