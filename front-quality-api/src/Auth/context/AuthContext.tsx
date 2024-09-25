import { createContext } from "react";

interface User {
    username: string;
}

interface LoginState {
    isAuth: boolean;
    isAdmin: boolean;
    user?: User;
}

interface AuthContextProps {
    login: LoginState;
    handlerLogin: ({ username, password }: { username: string; password: string }) => Promise<void>;
    handlerLogout: () => void;
}

const initialAuthContext: AuthContextProps = {
    login: {
        isAuth: false,
        isAdmin: false,
        user: undefined,
    },
    handlerLogin: async () => {},
    handlerLogout: () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialAuthContext);
