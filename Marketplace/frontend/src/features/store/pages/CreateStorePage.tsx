import { useNavigate } from "react-router-dom";
import { StoreForm } from "../components/StoreForm";
import { useCreateStore } from "../hooks/useCreateStore";

export function CreateStorePage() {
    const { submit, error, result } = useCreateStore();
    const navigate = useNavigate();

    if (error) return (<p className="text-red-600 text-sm">{error}</p>)

    if (result) navigate("/minha-conta/loja");

    return (
        <div>
            <h1 className="text-xl">Criar nova loja</h1>
            <StoreForm submit={submit} />
        </div>
    );
}