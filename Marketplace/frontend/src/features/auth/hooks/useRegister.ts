import axios from 'axios';
import { useState } from "react";
import { register } from "../auth.service";
import type { RegisterResponse } from "../auth.types";
import type { RegisterFormData } from '../schemas/registerSchema';

export function useRegister() {
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<RegisterResponse | null>(null);

    async function submit(data: RegisterFormData) {
        setError(null);

        try {
            const result = await register(data);
            setResult(result);

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message ?? 'Erro ao cadastrar');
            } else {
                setError('Erro ao cadastrar');
            }
        }
    }

    return { submit, error, result } 
}