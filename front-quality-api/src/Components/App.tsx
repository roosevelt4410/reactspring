import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../Auth/pages/LoginPage';
import { AuthContext } from '../Auth/context/AuthContext';
import { UserRoutes } from '../Usuarios/routes/UserRoutes';

export const App = () => {

    const { login } = useContext(AuthContext);
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path='/*' element={<UserRoutes />} />
                        
                    )
                    : <>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/login" /> } />
                    </>
                    
            }
        </Routes>
    );
}
/* 
    import React from 'react'
    
    const App = () => {
      return (
        <div>
          <h1>Hola como estas</h1>
        </div>
      )
    }
    
    export default App */
    