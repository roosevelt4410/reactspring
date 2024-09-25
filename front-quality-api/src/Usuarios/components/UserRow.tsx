import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../../Auth/context/AuthContext";


export const UserRow = ({ id, username, email , admin}: any) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
    const { login } = useContext(AuthContext);

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap font-serif">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap font-serif">{username}</td>
            <td className="px-6 py-4 whitespace-nowrap text-dark-gray font-serif">{email}</td>

            {login.isAdmin && (
                <>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
                        <button
                            onClick={() => handlerUserSelectedForm({ id, username, email, password: '' ,admin})}
                            className="text-empresa-verde hover:text-empresa-verde-dark"
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
                        <button
                            onClick={() => handlerRemoveUser(id)}
                            className="text-empresa-rojo hover:text-empresa-rojo-dark ml-2"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
};
