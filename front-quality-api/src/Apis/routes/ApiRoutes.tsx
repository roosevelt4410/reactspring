// ApiRoutes.js
import { Navigate, Route, Routes } from 'react-router-dom';
import ApisComponent from '../../Components/ApisComponentInternas';
import ApisComponetsCOBIS from '../../Components/ApisComponetsCOBIS';


export const ApiRoutes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<ApisComponent />} />
            <Route path="/apisComponetsExternas" element={<ApisComponetsCOBIS />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
