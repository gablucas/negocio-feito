import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
    withCredentials: true 
});

let onUnauthorized: (() => void) | null = null;

export function setUnauthorizedHandler(handler: (() => void) | null) {
    onUnauthorized = handler;
}

http.interceptors.response.use(
    response => response,
    (error) => {
        const status = error.response?.status;
        const url: string = error.config?.url ?? "";
        const isAuthRoute = url.includes("/auth/me") || url.includes("/auth/login")

        if (status === 401 && !isAuthRoute) {
            onUnauthorized?.();
        }

        return Promise.reject(error);
    }
);