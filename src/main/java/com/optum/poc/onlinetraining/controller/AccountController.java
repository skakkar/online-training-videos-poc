package com.optum.poc.onlinetraining.controller;

import java.security.Principal;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.optum.poc.onlinetraining.dto.StudentCourseInfo;
import com.optum.poc.onlinetraining.entities.Student;
import com.optum.poc.onlinetraining.entities.StudentCourse;
import com.optum.poc.onlinetraining.services.StudentService;
import com.optum.poc.onlinetraining.util.CustomErrorType;

@RestController
@RequestMapping("account")
public class AccountController {

	public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private StudentService studentService;
	
	@CrossOrigin
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody StudentCourseInfo newUser) {
		if (studentService.find(newUser.getStudent().getUsername()) != null) {
			logger.error("username Already exist " + newUser.getStudent().getUsername());
			return new ResponseEntity(
					new CustomErrorType("user with username " + newUser.getStudent().getUsername() + "already exist "),
					HttpStatus.CONFLICT);
		}
		newUser.getStudent().setRole("USER");
		
		return new ResponseEntity<Student>(studentService.save(newUser), HttpStatus.CREATED);
	}

	@CrossOrigin
	@RequestMapping("/login")
	public Principal user(Principal principal) {
		logger.info("user logged "+principal);
		return principal;
	}
	

	@CrossOrigin
	@RequestMapping(value = "/getStudentInfo/{userId}", method = RequestMethod.GET)
	public Set<StudentCourse>  getUser(@PathVariable Long userId) {
		Student s= studentService.find(userId);
		return s.getStudentCourses();
	}

	
}
