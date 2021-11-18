import axios, { AxiosRequestConfig } from 'axios';

export const CDS_AUTH_TOKEN = 'x-vcloud-authorization';

const http = axios.create({
  baseURL: `${import.meta.env.VITE_APP_HOST}/api/pcdl/v1/`,
  withCredentials: true,
  timeout: 10000,
});

function vCDRequestInterceptor(config: AxiosRequestConfig) {
  const requestConfig: AxiosRequestConfig = { headers: undefined };

  // except login API, all other API request header needs token
  if (!config.data?.login) {
    const token = localStorage.getItem(CDS_AUTH_TOKEN);
    if (token) {
      requestConfig.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
      // requestConfig.headers[CDS_AUTH_TOKEN] = token;
    }
  }

  return requestConfig;
}

http.interceptors.request.use(vCDRequestInterceptor, (error) => {
  return Promise.reject(error);
});

http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    // todo: need jump ? Probably no
    // 401 and not in login page, redirect to login
    // if (error.response.status === 401 && window.location.pathname !== '/login') {
    //   window.location.href = `${process.env.REACT_APP_BASE_HREF}login`;
    // }

    const { response } = error;
    switch (response?.status) {
      case 401:
        // TODO: For CDS only, window.location.href = '/'. may need a timer to delay redirection; CPN will refresh token
        break;
      default:
        break;
    }

    return Promise.reject(error.response?.data || error);
  },
);

export default http;
