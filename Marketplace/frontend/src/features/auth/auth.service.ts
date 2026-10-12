import { http } from '../../core/config/https';
import type { User, RegisterResponse } from "./auth.types";
import type { LoginFormData } from './schemas/loginSchema';
import type { RegisterFormData } from './schemas/registerSchema';

export async function login(data: LoginFormData): Promise<User> {
    const response = await http.post<User>('/auth/login', data);
    return response.data;
}

export async function logout() : Promise<void> {
    await http.get("/auth/logout")
}

export async function register(data: RegisterFormData): Promise<RegisterResponse> {
    const response = await http.post<RegisterResponse>('/auth/register', data);
    return response.data;
}