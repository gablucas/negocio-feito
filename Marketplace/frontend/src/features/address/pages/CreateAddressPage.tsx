import { Link } from "react-router-dom";
import { AddressForm } from "../components/AddressForm";
import { useCreateAdress } from "../hooks/useCreateAddress";

export function CreateAddressPage() {
    const { submit, error, result } = useCreateAdress();

    if (error) return (<p className="text-red-600 text-sm">{error}</p>)

    if (result) return (
        <div>
            <h1 className="text-xl text-green-700 mb-2">Endereço cadastrado com sucesso</h1>

            <div className="flex flex-col border border-gray-400 text-gray-800 rounded-lg p-4">
                <span className="font-medium text-gray-900 uppercase">{result.label}</span>
                <span>{result.postalCode}</span>
                <span>{result.street}, {result.number} - {result.neighborhood} - {result.city} - {result.state}</span>
                <span>{result.complement}</span>
            </div>
        </div>
    )

    return (
        <div className="relative pt-4">
            <h1 className="text-xl inline-block">Novo endereço</h1>
            <Link className="absolute top-[-10px] left-0 text-gray-500 hover:text-gray-600" to="/minha-conta/enderecos">Voltar</Link>
            <AddressForm submit={submit} />
        </div>
    )
}