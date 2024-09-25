import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
    username: '',
    password: '',
}
export const LoginPage = () => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;
    const { handlerLogin } = useContext(AuthContext);

    const onInputChange = ({ target }:any) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event:any) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }
        handlerLogin({username, password});
        setLoginForm(initialLoginForm);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-empresa-verde to-bg-empresa-verde-dark">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-empresa-negro">Quality API !</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <input
                className="w-full px-5 py-3 border border-empresa-verde rounded-lg focus:outline-none focus:ring-4 focus:ring-empresa-verde"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-8">
              <input
                className="w-full px-5 py-3 border border-empresa-verde rounded-lg focus:outline-none focus:ring-4 focus:ring-empresa-verde"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-empresa-rojo hover:bg-empresa-negro text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                type="submit">
                Entrar!
              </button>
            </div>
          </form>
        </div>
      </div>
      

    );

}