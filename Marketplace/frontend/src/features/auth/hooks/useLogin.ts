import axios from 'axios';
import type { LoginFormData } from "../schemas/loginSchema";
import { login } from '../auth.service';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../AuthContext';

export function useLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const { setUser } = useAuth();

    async function submit(data: LoginFormData) {
        setError(null);

        try {
            const user = await login(data);
            setUser(user);
            navigate('/');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message ?? 'Erro ao logar');
            } else {
                setError('Erro ao logar');
            }
        }
    }

    return { submit, error };
}