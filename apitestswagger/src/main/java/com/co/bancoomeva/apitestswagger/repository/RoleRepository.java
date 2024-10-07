package com.co.bancoomeva.apitestswagger.repository;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.co.bancoomeva.apitestswagger.domain.Role;

public interface RoleRepository
        extends CrudRepository<Role, Long> {
        Optional<Role> findByName(String name);
}
