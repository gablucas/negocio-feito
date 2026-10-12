import { useNavigate } from "react-router-dom";
import { logout } from "../auth.service";

export function useLogout() {
    const navigate = useNavigate();

    async function submit() {
        await logout();
        navigate("/");
    }

    return { submit }
}