import { useState } from "react"
import type { Store } from "../store.types";
import { createStore } from "../store.service";
import type { StoreData } from "../store.schema";
import axios from "axios";

export function useCreateStore() {
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<Store | null>(null);

    async function submit(store: StoreData) {
        setError(null);

        try {
            const result = await createStore(store);
            setResult(result);

        } catch(err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message ?? 'Erro ao cadastrar')
            } else {
                setError('Erro ao cadastrar');
            }
        }
    }

    return { submit, error, result }
}