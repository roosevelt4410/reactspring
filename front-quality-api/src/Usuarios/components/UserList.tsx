import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../../Auth/context/AuthContext";
import { UserRow } from "./UserRow";


export const UsersList = () => {
    const { users } = useContext(UserContext);
    const { login } = useContext(AuthContext);
    /* (login.isAdmconsole.login); */
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 mt-8">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-empresa-negro text-left text-xs font-bold text-white uppercase tracking-wider">
                            Id
                        </th>
                        <th className="px-6 py-3 bg-empresa-negro text-left text-xs font-bold text-white uppercase tracking-wider">
                            Username
                        </th>
                        <th className="px-6 py-3 bg-empresa-negro text-left text-xs font-bold text-white uppercase tracking-wider">
                            Email
                        </th>
                        {login.isAdmin && (
                            <>
                                <th className="px-6 py-3 bg-empresa-negro text-right text-xs font-bold text-white uppercase tracking-wider">
                                    Editar
                                </th>
                                <th className="px-6 py-3 bg-empresa-negro text-right text-xs font-bold text-white uppercase tracking-wider">
                                    Eliminar
                                </th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(({ id, username, email,admin }: any) => (
                            <UserRow
                                key={id}
                                id={id}
                                username={username}
                                email={email}
                                admin={admin}
                            />
                        ))
                    ) : (
                        <tr key="no-users">
                            <td className="px-6 py-4 text-center text-gray-500" colSpan={5}>
                                No hay usuarios para mostrar
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
