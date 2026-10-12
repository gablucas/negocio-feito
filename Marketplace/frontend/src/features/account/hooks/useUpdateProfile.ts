import { useState } from "react";
import { updateProfile } from "../account.service";
import type { UpdateProfileData } from "../account.schemas";
import axios from "axios";
import { useAuth } from "@/features/auth";

export function useUpdateProfile() {
    const [error, setError] = useState<string | null>(null);
    const { updateUser } = useAuth();


    async function submit(data: UpdateProfileData) {
        setError(null);
        
        try {
            const result = await updateProfile(data);
            updateUser({ name: result.name })

        } catch(err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message ?? 'Erro ao atualizar o perfil');
            } else {
                setError('Erro ao atualizar o perfil');
            }
        }
    }

    return { submit, error } 
}