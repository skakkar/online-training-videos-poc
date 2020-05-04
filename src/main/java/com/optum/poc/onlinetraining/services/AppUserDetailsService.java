package com.optum.poc.onlinetraining.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.optum.poc.onlinetraining.entities.Student;


@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	StudentService studentService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Student user = studentService.find(username);
		return  user;
	}

}
