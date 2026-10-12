import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext";

export function GuestRoute() {
    const { user, loading } = useAuth();

    if (loading) return <p>Carregando...</p>
    if (user) return <Navigate to="/" replace />

    return <Outlet />
}