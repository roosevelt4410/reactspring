package com.co.bancoomeva.apitestswagger.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.co.bancoomeva.apitestswagger.domain.User;



@Repository
public interface UserRepository extends CrudRepository<User,Long >{

	public User findByUsername(String username);
	
	@Query("select u from User u where u.username=?1")
    Optional<User> getUserByUsername(String username);
	
}

