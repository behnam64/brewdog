import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}/`,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return { data: response.data, status: response.status } as any;
  },
  (error: AxiosError<any>) => {
    return Promise.reject({ data: error.response?.data, status: error.response?.status });
  }
);
