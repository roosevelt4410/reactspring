package com.co.bancoomeva.apitestswagger.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Modelo para la solicitud de identificación")
public class IdentificacionRequest {
    
    @ApiModelProperty(example = "1113516745", required = true)
    private String numeroIdentificacion;

    @ApiModelProperty(example = "CC", required = true)
    private String tipoIdentificacion;

    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }
}
