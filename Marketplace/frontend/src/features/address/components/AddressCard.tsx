import { Link } from "react-router-dom";
import type { Address } from "../address.types";

export function AddressCard({ address }: { address: Address }) {
    return (
        <div className="flex flex-col border border-gray-400 text-gray-800 rounded-lg p-4">
            <span className="font-medium text-gray-900 uppercase">{address.label}</span>
            <span>{address.postalCode}</span>
            <span>{address.street}, {address.number} - {address.neighborhood} - {address.city} - {address.state}</span>
            <span>{address.complement}</span>

            <div className="flex justify-between mt-2 text-sm text-gray-500">
                <Link className="hover:text-gray-400" to={`/minha-conta/enderecos/${address.id}/editar`}>Editar</Link>
            </div>
        </div>
    );
}