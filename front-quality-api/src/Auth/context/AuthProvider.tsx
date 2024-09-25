import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";



interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <AuthContext.Provider value={{ login, handlerLogin, handlerLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
