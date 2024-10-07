package com.co.bancoomeva.apitestswagger.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ConsultarPaisesServiceImpl implements IConsultarPaisesService {

    private static final Logger logger = LoggerFactory.getLogger(ConsultarPaisesServiceImpl.class);

    @org.springframework.beans.factory.annotation.Value("${api.url.consultarPaises}")
    private String apiConsultarPaises;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public String consultarPaises() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");

        HttpEntity<String> entity = new HttpEntity<>("", headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                apiConsultarPaises,
                HttpMethod.POST,
                entity,
                String.class
            );
            return response.getBody();
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            logger.error("Error al consultar países: {}", e.getMessage());
            return "Error al consultar países: " + e.getMessage();
        } catch (Exception e) {
            logger.error("Error inesperado: {}", e.getMessage());
            return "Error inesperado: " + e.getMessage();
        }
    }

    @Override
    public String obtenerPaisPorCodigo(String codigo) {
        String paisesJson = consultarPaises();
        ObjectMapper mapper = new ObjectMapper();
        try {
            JsonNode root = mapper.readTree(paisesJson);
            for (JsonNode pais : root) {
                JsonNode codigoNode = pais.get("code");
                if (codigoNode != null && codigoNode.asText().equals(codigo)) {
                    return pais.toString();
                }
            }
            return "País no encontrado";
        } catch (Exception e) {
            logger.error("Error al procesar la respuesta JSON: {}", e.getMessage());
            return "Error al procesar la respuesta JSON: " + e.getMessage();
        }
    }
}
