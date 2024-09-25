import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelected, handlerCloseForm }:any) => {
    const { initialUserForm, handlerAddUser, errors } = useContext(UserContext);
    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email , admin} = userForm;
    const [checked, setChecked] = useState(userForm.admin);

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }:any) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    };

    const onSubmit = (event:any) => {
        event.preventDefault();
        handlerAddUser(userForm);
    };

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    };

    const onCheckboxChange = () => {
        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin: checked,
        }
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <input
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empresa-verde"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                {errors?.username && <p className="text-red-500">{errors.username}</p>}
            </div>

            {id === 0 && (
                <div>
                    <input
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empresa-verde"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                    {errors?.password && <p className="text-red-500">{errors.password}</p>}
                </div>
            )}

            <div>
                <input
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empresa-verde"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
                {errors?.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="my-3 form-check">
                <input type="checkbox"
                    name="admin"
                    checked={admin}
                    className="form-check-input"
                    onChange={onCheckboxChange}
                />
                <label className="form-check-label">Admin</label>
            </div>

            <input type="hidden" name="id" value={id} />

            <div className="flex justify-end space-x-2">
                <button
                    className="bg-empresa-verde text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    type="submit"
                >
                    {id > 0 ? 'Editar' : 'Crear'}
                </button>
                <button
                    className="bg-empresa-rojo text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    type="button"
                    onClick={onCloseForm}
                >
                    Cerrar
                </button>
            </div>
        </form>
    );
};
