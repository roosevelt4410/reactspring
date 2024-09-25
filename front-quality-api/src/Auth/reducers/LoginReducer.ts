interface User {
    username: string;
}

interface LoginState {
    isAuth: boolean;
    isAdmin: boolean;
    user?: User;
}

const initialState: LoginState = {
    isAuth: false,
    isAdmin: false,
    user: undefined,
};

type LoginAction =
    | { type: 'login'; payload: { user: User; isAdmin: boolean } }
    | { type: 'logout' };

export const LoginReducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                isAdmin: action.payload.isAdmin,
                user: action.payload.user,
            };
        case 'logout':
            return {
                isAuth: false,
                isAdmin: false,
                user: undefined,
            };
        default:
            return state;
    }
};

export type { LoginState, LoginAction };
