import { Link } from "react-router-dom";
import logo from "../core/assets/logo.png";
import { useAuth } from "../features/auth/AuthContext";

export function Header() {

    const { loading, user } = useAuth();

    return (
        <header className="bg pt-2 pb-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={logo} className="w-40" />
                </Link>

                {!loading && user ? 
                (
                    <div>
                        <Link className="pl-2 pr-2" to="/minha-conta">{user.name.split(" ")[0]}</Link>
                    </div>
                ) : (
                    <div>
                        <Link className="pl-2 pr-2" to="/registrar">Crie sua conta</Link>
                        <Link className="pl-2 pr-2" to="/login">Entrar</Link>
                    </div>
                )}
                    
            </div>
        </header>
    );
}