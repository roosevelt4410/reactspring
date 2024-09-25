import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";

export const UserModalForm = () => {
    const { userSelected, handlerCloseForm } = useContext(UserContext);
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
                <div className="flex justify-between items-center bg-empresa-negro text-white p-4 rounded-t-lg">
                    <h5 className="text-lg font-bold">
                        {userSelected.id > 0 ? 'Editar' : 'Crear'} Usuario
                    </h5>
                    <button onClick={handlerCloseForm} className="text-white hover:text-empresa-verde">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="p-4">
                    <UserForm 
                        userSelected={userSelected}
                        handlerCloseForm={handlerCloseForm}
                    />
                </div>
            </div>
        </div>
    );
};
