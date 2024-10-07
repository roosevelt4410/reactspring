package com.co.bancoomeva.apitestswagger.service;

import java.util.List;
import java.util.Optional;

import com.co.bancoomeva.apitestswagger.domain.User;
import com.co.bancoomeva.apitestswagger.domain.UserRequest;
import com.co.bancoomeva.apitestswagger.domain.dto.UserDto;



public interface IUserService {
    
	List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);
    Optional<UserDto> update(UserRequest user, Long id);

    void remove(Long id);
}

