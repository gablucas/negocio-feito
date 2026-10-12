import { Link } from "react-router-dom";
import { useGetAddresses } from "../hooks/useGetAddresses";
import { AddressCard } from "../components/AddressCard";

export function AddressesPage() {
    const { addresses, loading, error } = useGetAddresses();

    const isEmpty = !loading && !error && (addresses?.length ?? 0) === 0;
    const hasAddresses = !loading && !error && (addresses?.length ?? 0) > 0;

    return (
        <div className="flex flex-col">
          
            <h1 className="text-xl inline-block mb-2">Seus endereços</h1>       

            {loading && (<span>Carregando seus endereços</span>)}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {isEmpty && (
                <span className="border border-gray-300 rounded p-4">
                    Você não possui nenhum endereço no momento, adicione um!
                </span>
            )}

            {hasAddresses && (
                <div className="flex flex-col gap-4">
                    {addresses!.map((address) => (
                        <AddressCard key={address.id} address={address} />
                    ))}
                </div>
            )}

            <Link className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer w-full text-center mt-4" to="/minha-conta/enderecos/criar">Adicionar novo endereço</Link>
        </div>
    )
}