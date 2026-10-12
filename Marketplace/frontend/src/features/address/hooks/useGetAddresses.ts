import { useEffect, useState } from "react";
import { getAddresses } from "../address.service";
import type { Address } from "../address.types";
import axios from "axios";

export function useGetAddresses() {
    const [addresses, setAddresses] = useState<Address[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function load() {
            try {
                const addresses = await getAddresses();
                setAddresses(addresses);
                console.log('chamei')

            } catch(err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.message ?? 'Erro ao carregar os endereços');
                } else {
                    setError('Erro ao carregar o perfil');
                }
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [])

    return { addresses, loading, error }
}