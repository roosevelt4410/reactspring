import { useCallback, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { findAll, save, update, remove } from "../services/UserService";
import { AuthContext } from "../../Auth/context/AuthContext";

interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    admin:boolean;
}

interface Errors {
    username: string;
    password: string;
    email: string;
}

const initialUsers: User[] = [];

const initialUserForm: User = {
    id: 0,
    username: '',
    password: '',
    email: '',
    admin:false
}

const initialErrors: Errors = {
    username: '',
    password: '',
    email: '',
}

type Action =
    | { type: 'loadingUsers'; payload: User[] }
    | { type: 'addUser'; payload: User }
    | { type: 'updateUser'; payload: User }
    | { type: 'removeUser'; payload: number };

const usersReducer = (state: User[], action: Action): User[] => {
    switch (action.type) {
        case 'loadingUsers':
            return action.payload;
        case 'addUser':
            return [...state, action.payload];
        case 'updateUser':
            return state.map(user => user.id === action.payload.id ? action.payload : user);
        case 'removeUser':
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState<User>(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const [errors, setErrors] = useState<Errors>(initialErrors);

    const navigate = useNavigate();
    const { login,handlerLogout } = useContext(AuthContext);

    const getUsers = useCallback(async () => {
        const result = await findAll();
       /*  console.log(result); */
        dispatch({
            type: 'loadingUsers',
            payload: result?.data,
        });
    }, []);

    const handlerAddUser = async (user: User) => {
        if (!login.isAdmin) return;

        let response;
        try {
            if (user.id === 0) {
                response = await save(user);
            } else {
                response = await update(user);
            }

            dispatch({
                type: user.id === 0 ? 'addUser' : 'updateUser',
                payload: response.data,
            });

            Swal.fire(
                user.id === 0 ? 'Usuario Creado' : 'Usuario Actualizado',
                user.id === 0 ? 'El usuario ha sido creado con éxito!' : 'El usuario ha sido actualizado con éxito!',
                'success'
            );
            handlerCloseForm();
            navigate('/users');
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                setErrors(error.response.data);
            } else if (error.response && error.response.status === 500 &&
                error.response.data?.message?.includes('constraint')) {

                if (error.response.data?.message?.includes('UK_username')) {
                    setErrors({ username: 'El username ya existe!', password: '', email: '' });
                }
                if (error.response.data?.message?.includes('UK_email')) {
                    setErrors({ username: '', password: '', email: 'El email ya existe!' });
                }

            } else if (error.response?.status === 401) {
                handlerLogout();
            } else {
                throw error;
            }
        }
    }

    const handlerRemoveUser = (id: number) => {
        if (!login.isAdmin) return;

        Swal.fire({
            title: '¿Está seguro que desea eliminar?',
            text: "¡Cuidado, el usuario será eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008C4F',
            cancelButtonColor: '#B12923',
            confirmButtonText: 'Sí, eliminar!'
        }).then(async(result) => {
            if (result.isConfirmed) {

                try {
                    await remove(id);
                    dispatch({
                        type: 'removeUser',
                        payload: id,
                    });
                    Swal.fire(
                        'Usuario Eliminado!',
                        'El usuario ha sido eliminado con exito!',
                        'success'
                    );
                } catch (error:any) {
                    if (error.response?.status === 401) {
                        handlerLogout();
                    }
                }
            }
        })
    }

    const handlerUserSelectedForm = (user: User) => {
        setVisibleForm(true);
        setUserSelected({ ...user });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
        setErrors(initialErrors);
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}
