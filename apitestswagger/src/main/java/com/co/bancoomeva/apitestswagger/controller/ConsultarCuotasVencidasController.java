package com.co.bancoomeva.apitestswagger.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.co.bancoomeva.apitestswagger.domain.IdentificacionRequest;
import com.co.bancoomeva.apitestswagger.service.IConsultarCuotasVencidasService;

@RestController
@RequestMapping("/api")
@Api(value = "Consultar Cuotas Vencidas", tags = "Consultar Cuotas Vencidas")
public class ConsultarCuotasVencidasController {

    @Autowired
    private IConsultarCuotasVencidasService consultarCuotasVencidasService;

    @ApiOperation(value = "Consultar Cuotas Vencidas", notes = "Endpoint para consultar cuotas vencidas")
    @PostMapping("/consultarCuotasVencidas")
    public ResponseEntity<String> consultarCuotasVencidas(
            @ApiParam(value = "Solicitud de identificación", required = true) @RequestBody IdentificacionRequest request) {
        try {
            String response = consultarCuotasVencidasService.postData(request.getNumeroIdentificacion(), request.getTipoIdentificacion());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/consultarCuotasSAT")
    public ResponseEntity<String> consultarCuotasSAT() {
        try {
            String response = consultarCuotasVencidasService.postData("31154483", "CC");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/consultarCuotasTarcred")
    public ResponseEntity<String> consultarCuotasTarcred() {
        try {
            String response = consultarCuotasVencidasService.postData("1144146788", "CC");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
