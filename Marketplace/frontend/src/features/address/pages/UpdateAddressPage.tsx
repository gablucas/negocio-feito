import { Link, useParams } from "react-router-dom";
import { useGetAddressById } from "../hooks/useGetAddressById";
import { useUpdateAddress } from "../hooks/useUpdateAddress";
import { AddressForm } from "../components/AddressForm";

export function UpdateAddressPage() {
    const { id } = useParams<{ id: string }>();
    const { loading, error, address } = useGetAddressById(id);
    const { submit, error: updateError } = useUpdateAddress();

    if (!id) return <p>Endereço não encontrado</p>;

    if (error) return (<p className="text-red-600 text-sm">{error}</p>)

    return (
        <div className="relative w-fit mx-auto flex flex-col items-start mt-12 bg-white pt-8 p-6 rounded">
            <h1 className="text-xl inline-block">Atualizar endereço</h1>
            <Link className="absolute top-2 text-gray-500 hover:text-gray-600" to="/minha-conta/enderecos">Voltar</Link>

            {loading ? (<p>Carregando endereço...</p>) : address != null ? (<AddressForm initialValues={address} submit={(data) => submit(id, data)} />) : ""}
            {updateError && <p className="text-red-600 text-sm mt-2">{updateError}</p>}
        </div>
    )
    
}