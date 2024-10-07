package com.co.bancoomeva.apitestswagger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.co.bancoomeva.apitestswagger.service.IConsultarDepartamentosService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
@Api(value = "Consultar Departamentos", tags = "Consultar Departamentos")
public class consultarDepartamentosController {
	
	
    @Autowired
    private IConsultarDepartamentosService consultarDepartamentosService;
    
    @ApiOperation(value = "Consultar Departamentos", notes = "Obtiene un listado de Departamentos")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Listado de Departamentos obtenido exitosamente"),
        @ApiResponse(code = 500, message = "Error interno del servidor")
    })
    @GetMapping("/consultarDepartamentos")
    public String consultarDepartamentos() {
        return consultarDepartamentosService.consultarDepartamentos();
    }
    
    
    @ApiOperation(value = "Obtener Departamentos por Código", notes = "Obtiene un Departamentos por su código")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "País obtenido exitosamente"),
        @ApiResponse(code = 404, message = "País no encontrado"),
        @ApiResponse(code = 500, message = "Error interno del servidor")
    })
    @GetMapping("/consultarDepartamentos/{codigo}")
    public String obtenerDepartamentoPorCodigo(@PathVariable String codigo) {
        return consultarDepartamentosService.obtenerDepartamentoPorCodigo(codigo);
    }

}
