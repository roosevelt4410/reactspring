import React, { useEffect, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ApisComponent = () => {
  const [token, setToken] = useState('');
  const config = {
    backendUrl: process.env.REACT_APP_PUBLIC_BACKEND
  };
  useEffect(() => {
    // Obtener el token JWT del localStorage
    const storedToken = sessionStorage.getItem('token');
    console.log(storedToken);
    if (storedToken) {
      setToken(storedToken);

    }
  }, []);

  return (
    <>
      <div>
        <h1 className="text-lg text-empresa-verde text-mono py-4 px-6 rounded-md shadow-xl font-serif font-extrabold border-b-2 border-empresa-verde text-center">
          APIs Internas BANCO
        </h1>
      </div>

      <SwaggerUI
        url={`${config.backendUrl}/v2/api-docs`}
        requestInterceptor={(req: any) => {
          if (token) {
            req.headers['Authorization'] = `Bearer ${token}`;
          }
          return req;
        }}
      />
    </>
  );
};

export default ApisComponent;
