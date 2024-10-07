package com.co.bancoomeva.apitestswagger.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;

@Service
public class ConsultarCuotasVencidasServiceImpl implements IConsultarCuotasVencidasService {
	
	@org.springframework.beans.factory.annotation.Value("${api.url}")
	private String apiUrl;
	
    private final RestTemplate restTemplate;

    public ConsultarCuotasVencidasServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

	    @Override
	    public String postData(String numeroIdentificacion, String tipoIdentificacion) {
	        HttpHeaders headers = new HttpHeaders();
	        headers.setContentType(MediaType.APPLICATION_JSON);

	        String body = String.format("{\"numeroIdentificacion\": \"%s\", \"tipoIdentificacion\": \"%s\"}", numeroIdentificacion, tipoIdentificacion);

	        HttpEntity<String> entity = new HttpEntity<>(body, headers);

	        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, entity, String.class);

	        if (response.getStatusCode() == HttpStatus.OK) {
	            return response.getBody();
	        } else {
	            throw new RuntimeException("Failed to post data: " + response.getStatusCode());
	        }

	}

}
