import { Link } from "react-router-dom";

export function StoresPage() {

    return (
        <div className="flex flex-col gap-2 items-center">
            <span>Você não possui uma loja, crie uma!</span>
            <Link to="/minha-conta/loja/criar" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50 cursor-pointer">Criar loja</Link>
        </div>
    )
}