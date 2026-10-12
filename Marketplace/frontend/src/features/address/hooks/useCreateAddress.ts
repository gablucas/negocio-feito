import { useState } from "react";
import axios from "axios";
import type { AddressData } from "../address.schema";
import { createAddress } from "../address.service";
import type { Address } from "../address.types";

export function useCreateAdress() {
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<Address | null>(null);

    async function submit(address : AddressData) {
        setError(null);

        try {
            const result = await createAddress(address);
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