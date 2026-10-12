import { Link } from "react-router-dom";

export function ProfilePage() {

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-xl">Sua conta</h1>

            <div className="flex gap-2">
                <Link to="/minha-conta/informacoes-pessoais" className="border border-gray-400 rounded-lg p-6">Informações Pessoais</Link>
                <Link to="/minha-conta/enderecos" className="border border-gray-400 rounded-lg p-6">Endereços</Link>
            </div>
        </div>
    )
}