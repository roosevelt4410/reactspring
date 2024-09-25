import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "../context/UserProvider"
import { useContext } from "react"
import { AuthContext } from "../../Auth/context/AuthContext";
import { UsersPage } from "../pages/UsersPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../../Components/Navbar";
import { ApiRoutes } from "../../Apis/routes/ApiRoutes";

export const UserRoutes = () => {
    const { login } = useContext(AuthContext);
    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    {!login.isAdmin || <>
                        <Route path="users/register" element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>}
                    <Route path="apis/*" element={<ApiRoutes />} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}