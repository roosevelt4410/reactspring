package com.co.bancoomeva.apitestswagger.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ConsultarCiudadesServiceImpl implements IConsultarCiudadesService {

	
	private static final Logger logger = LoggerFactory.getLogger(ConsultarCiudadesServiceImpl.class);
	
	@org.springframework.beans.factory.annotation.Value("${api.url.consultarCiudaes}")
    private String apiConsultarCiudades;
	
	 @Autowired
	 private RestTemplate restTemplate;
	
	@Override
	public String consultarCiudades() {
		HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");

        HttpEntity<String> entity = new HttpEntity<>("", headers);
        
        try {
            ResponseEntity<String> response = restTemplate.exchange(
            	apiConsultarCiudades,
                HttpMethod.POST,
                entity,
                String.class
            );
            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            logger.error("Error al consultar ciudades: {}", e.getMessage());
            return "Error al consultar ciudades: " + e.getMessage();
        } catch (Exception e) {
            logger.error("Error inesperado: {}", e.getMessage());
            return "Error inesperado: " + e.getMessage();
        }
	}

	@Override
	public String obtenerCiudadPorCodigo(String codigo) {
	    String ciudadesJson = consultarCiudades();
	    ObjectMapper mapper = new ObjectMapper();
	    try {
	        JsonNode root = mapper.readTree(ciudadesJson);
	        JsonNode ciudadesArray = root.get("ciudades");
	        if (ciudadesArray != null) {
	            for (JsonNode ciudad : ciudadesArray) {
	                JsonNode codigoNode = ciudad.get("code");
	                if (codigoNode != null && codigoNode.asText().equals(codigo)) {
	                    return ciudad.toString();
	                }
	            }
	        }
	        return "Ciudad no encontrada";
	    } catch (Exception e) {
	        logger.error("Error al procesar la respuesta JSON: {}", e.getMessage());
	        return "Error al procesar la respuesta JSON: " + e.getMessage();
	    }
	}

}
