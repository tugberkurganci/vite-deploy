import axios from "axios";
import {
  loadAuthState,
  loadToken,
  storeToken,
} from "../../store/storage";
import { logoutSuccess } from "../../store/authStore/authSlice";
import { i18nInstance } from "../../locales";

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

export const axiosAssets = axios.create({
  baseURL: `https://spring-render-ucd3.onrender.com/assets`,
});
const axiosInstance = axios.create({
  baseURL: `https://spring-render-ucd3.onrender.com/api`,
});


axiosInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"] =i18nInstance.language
  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (value) => {
    return value;
  },
  async (error) => {
    if (error.response && error.response.status === 403) {
      console.error("403 Hatası Oluştu:", error.message);

      if (loadAuthState().id !== 0) {
        const response = await axiosInstance.post("/auth/refresh", {
          userId: loadAuthState().id,
        });

        if (response.status === 200) {
          setToken(response.data);
          const retryResponse = await axios.request(error.config);
          console.log("Yeniden çağrılan veri:", retryResponse.data);
          return retryResponse;
        }
      }
    }
    if (error.response && error.response.status === 409) {
      store.dispatch(logoutSuccess());
    }
    return Promise.reject(error);
  }
);

let authToken = loadToken();

export function setToken(token?: any) {
  authToken = token;
  storeToken(token);
}

export default axiosInstance;
