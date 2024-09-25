// ApiRoutes.js
import { Navigate, Route, Routes } from 'react-router-dom';
import ApisComponent from '../../Components/ApisComponent';


export const ApiRoutes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<ApisComponent />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
