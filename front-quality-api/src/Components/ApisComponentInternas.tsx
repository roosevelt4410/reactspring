
import SwaggerUI from 'swagger-ui-react'; 
import 'swagger-ui-react/swagger-ui.css'; 

const ApisComponent = () => {
  return (
    
    <>
      <div>
      <h1 className="text-lg text-empresa-verde text-mono py-4 px-6 rounded-md shadow-xl font-serif font-extrabold border-b-2 border-empresa-verde text-center">
      APIs Internas BANCO
                </h1>

      </div>
      <SwaggerUI url="http://localhost:8080/v2/api-docs" /> 
     {/*  <SwaggerUI url="http://localhost:8080/apitestswagger-0.0.1/v2/api-docs" /> */}
    </>
  );
};

export default ApisComponent;