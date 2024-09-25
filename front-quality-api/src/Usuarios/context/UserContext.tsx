import { createContext } from "react";
import { User } from "../interfaces/interface";

interface UserContextProps {
    users: User[];
    userSelected: User;
    initialUserForm: User;
    visibleForm: boolean;
    errors: {
        username: string;
        password: string;
        email: string;
    };
    handlerAddUser: (user: User) => Promise<void>;
    handlerRemoveUser: (id: number) => void;
    handlerUserSelectedForm: (user: User) => void;
    handlerOpenForm: () => void;
    handlerCloseForm: () => void;
    getUsers: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
