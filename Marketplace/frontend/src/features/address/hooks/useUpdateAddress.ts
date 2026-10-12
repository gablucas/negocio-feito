import { useState } from "react";
import { updateAddress } from "../address.service";
import type { Address } from "../address.types";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function useUpdateAddress() {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    async function submit(addressId : string, data: Address) {

        try {
            await updateAddress(addressId, data);
            navigate("/minha-conta/enderecos");
        } 
        catch(err) {

            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message ?? 'Erro ao carregar os endereços');
            } else {
                setError('Erro ao carregar o perfil');
            }
        } 
    }
    
    return { submit, error }
}