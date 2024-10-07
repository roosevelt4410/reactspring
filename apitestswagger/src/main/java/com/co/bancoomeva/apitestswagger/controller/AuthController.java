//package com.co.bancoomeva.apitestswagger.controller;
//
//import java.util.Collection;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.web.bind.annotation.*;
//
//import com.co.bancoomeva.apitestswagger.domain.User;
//import com.co.bancoomeva.apitestswagger.security.JwtAuthenticationFilter;
//import com.co.bancoomeva.apitestswagger.security.TokenJwtConfig;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//
//
//
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @Autowired
//    private JwtAuthenticationFilter jwtAuthenticationFilter; // Inyecta tu filtro aquí
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody User user) {
//        try {
//            // Autenticar al usuario
//            Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
//            
//            // Generar el token JWT
//            String token = generateToken(authentication); // Método para generar el token
//            
//            // Crear la respuesta que incluya el token
//            Map<String, Object> responseBody = new HashMap<>();
//            responseBody.put("token", token);
//            responseBody.put("message", String.format("Hola %s, has iniciado sesión con éxito!", user.getUsername()));
//            responseBody.put("username", user.getUsername());
//
//            return ResponseEntity.ok().body(responseBody);
//        } catch (AuthenticationException e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error en la autenticación");
//        }
//    }
//
//    // Método para generar el token JWT
//    private String generateToken(Authentication authentication) {
//        String username = authentication.getName();
//        Collection<? extends GrantedAuthority> roles = authentication.getAuthorities();
//        boolean isAdmin = roles.stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
//
//        Claims claims = Jwts.claims();
//        claims.put("authorities", roles);
//        claims.put("isAdmin", isAdmin);
//        claims.put("username", username);
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(username)
//                .signWith(SignatureAlgorithm.HS512, TokenJwtConfig.SECRET_KEY) // Especificar algoritmo explícitamente
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 hora de duración
//                .compact();
//    }
//}
