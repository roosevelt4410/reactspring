import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { loginUser } from "../services/authService";

interface User {
    username: string;
}

interface LoginState {
    isAuth: boolean;
    isAdmin: boolean;
    user?: User;
}

interface LoginAction {
    type: 'login' | 'logout';
    payload?: {
        user: User;
        isAdmin: boolean;
    };
}

const initialLogin: LoginState = JSON.parse(sessionStorage.getItem('login') || '{}') || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
};

export const useAuth = () => {
    const [login, dispatch] = useReducer((state: LoginState, action: LoginAction): LoginState => {
        switch (action.type) {
            case 'login':
                return {
                    ...state,
                    isAuth: true,
                    isAdmin: action.payload?.isAdmin || false,
                    user: action.payload?.user,
                };
            case 'logout':
                return {
                    ...state,
                    isAuth: false,
                    isAdmin: false,
                    user: undefined,
                };
            default:
                return state;
        }
    }, initialLogin);

    const navigate = useNavigate();

    const handlerLogin = async ({ username, password }: { username: string; password: string }) => {
        try {
            const response = await loginUser({ username, password });
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            /* console.log(claims); */
            const user = { username: claims.sub };
            dispatch({
                type: 'login',
                payload: { user, isAdmin: claims.isAdmin },
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));
            sessionStorage.setItem('token', `Bearer ${token}`);
            navigate('/users');
        } catch (error: any) {
            if (error.response?.status === 401) {
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            } else if (error.response?.status === 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso o permisos!', 'error');
            } else {
                throw error;
            }
        }
    };

    const handlerLogout = () => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#B12923', // empresa-rojo
          cancelButtonColor: '#008C4F', // empresa-verde
          confirmButtonText: 'Sí, cerrar sesión',
          cancelButtonText: 'Cancelar'
        }).then((result:any) => {
          if (result.isConfirmed) {
            dispatch({
              type: 'logout',
            });
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('login');
            sessionStorage.clear();
            Swal.fire(
              '¡Cerrado!',
              'Tu sesión ha sido cerrada.',
              'success'
            );
          }
        });
      };
      

    return {
        login,
        handlerLogin,
        handlerLogout,
    };
};
