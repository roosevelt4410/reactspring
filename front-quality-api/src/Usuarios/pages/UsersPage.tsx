import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../../Auth/context/AuthContext";
import { UserModalForm } from "../components/UserModalForm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UsersList } from "../components/UserList";

export const UsersPage = () => {
    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers,
    } = useContext(UserContext);

    const { login } = useContext(AuthContext);
    
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        if (isInitialLoad) {
            getUsers();
            setIsInitialLoad(false);
        }
    }, [getUsers, isInitialLoad]);

    return (
        <>
            {visibleForm && <UserModalForm />}
            <div className="container my-4">
            <h1 className="text-lg text-empresa-verde text-mono py-4 px-6 rounded-md shadow-xl font-serif font-extrabold border-b-2 border-empresa-verde text-center">
      Listado de Usuarios
                </h1>

                <div className="row">
                    <div className="col">
                        {users.length === 0
                            ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                            : <UsersList />
                        }

                        {!visibleForm && login.isAdmin && (
                            <div className="text-right mt-4">
                                <button
                                    className="bg-empresa-verde text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-gray-200"
                                    onClick={handlerOpenForm}
                                >
                                    <span className="mr-2"></span> <FontAwesomeIcon icon={faUserPlus} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
