package com.co.bancoomeva.apitestswagger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.co.bancoomeva.apitestswagger.service.IConsultarCiudadesService;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
@Api(value = "Consultar Ciudades", tags = "Consultar Ciudades")
public class ConsultarCiudadesController {

	
	@Autowired
    private IConsultarCiudadesService consultarCiudadesService;

    @ApiOperation(value = "Consultar ciudades", notes = "Obtiene un listado de ciudades")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Listado de ciudades obtenido exitosamente"),
        @ApiResponse(code = 500, message = "Error interno del servidor")
    })
    @GetMapping("/consultarCiudades")
    public String consultarCiudades() {
        return consultarCiudadesService.consultarCiudades();
    }

    @ApiOperation(value = "Obtener ciudad por Código", notes = "Obtiene una ciudad por su código")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Ciudad obtenido exitosamente"),
        @ApiResponse(code = 404, message = "Ciudad no encontrado"),
        @ApiResponse(code = 500, message = "Error interno del servidor")
    })
    @GetMapping("/consultarCiudades/{codigo}")
    public String obtenerCiudadPorCodigo(@PathVariable String codigo) {
        return consultarCiudadesService.obtenerCiudadPorCodigo(codigo);
    }
}
