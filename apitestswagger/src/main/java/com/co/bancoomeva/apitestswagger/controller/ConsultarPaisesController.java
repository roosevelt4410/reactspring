package com.co.bancoomeva.apitestswagger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.co.bancoomeva.apitestswagger.service.IConsultarPaisesService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
@Api(value = "Consultar Paises", tags = "Consultar Paises")
public class ConsultarPaisesController {

    @Autowired
    private IConsultarPaisesService consultarPaisesService;

    @ApiOperation(value = "Consultar Paises", notes = "Obtiene un listado de países")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Listado de países obtenido exitosamente"),
        @ApiResponse(code = 500, message = "Error interno del servidor")
    })
    @GetMapping("/consultarPaises")
    public String consultarPaises() {
        return consultarPaisesService.consultarPaises();
    }

    @ApiOperation(value = "Obtener País por Código", notes = "Obtiene un país por su código")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "País obtenido exitosamente"),
        @ApiResponse(code = 404, message = "País no encontrado"),
        @ApiResponse(code = 500, message = "Error interno del servidor")
    })
    @GetMapping("/consultarPaises/{codigo}")
    public String obtenerPaisPorCodigo(@PathVariable String codigo) {
        return consultarPaisesService.obtenerPaisPorCodigo(codigo);
    }
}
