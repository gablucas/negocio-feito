import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { http, setUnauthorizedHandler } from "../../core/config/https";
import type { User } from "./auth.types";

interface AuthContextValue {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    updateUser: (changes: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setUnauthorizedHandler(() => setUser(null));
        return () => setUnauthorizedHandler(null);
    }, []);

    useEffect(() => {
        http.get<User>('/auth/me')
            .then((res) => setUser(res.data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    function updateUser(changes: Partial<User>) {
        setUser((prev) => (prev ? { ...prev, ...changes } : prev));
    }

    return (
        <AuthContext.Provider value={{ user, loading, setUser, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth deve ser usado dentro de AuthProvider');
    return context;
}