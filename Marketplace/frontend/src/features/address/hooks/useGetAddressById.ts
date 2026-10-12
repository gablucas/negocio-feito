import { useEffect, useState } from "react";
import type { Address } from "../address.types";
import { getAddressById } from "../address.service";
import axios from "axios";

export function useGetAddressById(addressId : string | undefined) {
    const [address, setAddress] = useState<Address | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        async function load() {
            try {

                if (!addressId) return;

                const data = await getAddressById(addressId)
                setAddress(data);
            }
            catch(err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.message ?? 'Erro ao buscar os dados do endereço');
                } else {
                    setError('Erro os dados do endereço');
                }
            } finally {
                setLoading(false);
            }
            
        }

        load();
    }, [addressId])

    return { loading, error, address }
}