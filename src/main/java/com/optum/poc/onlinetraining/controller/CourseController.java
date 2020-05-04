package com.optum.poc.onlinetraining.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.optum.poc.onlinetraining.dto.CourseContentData;
import com.optum.poc.onlinetraining.dto.CourseData;
import com.optum.poc.onlinetraining.dto.CourseSectionData;
import com.optum.poc.onlinetraining.dto.UserCourse;
import com.optum.poc.onlinetraining.entities.Course;
import com.optum.poc.onlinetraining.entities.CourseContent;
import com.optum.poc.onlinetraining.services.CourseService;

@RestController
@RequestMapping("course")
public class CourseController {
	
	@Autowired
	CourseService courseService;
	
	@CrossOrigin
	@RequestMapping(value = "/courses", method = RequestMethod.GET)
	public List<Course> getUserCourses() {
	     return courseService.findAllCourses();
	}
	
	@CrossOrigin
	@RequestMapping(value = "/courseInfo/{courseId}", method = RequestMethod.GET)
	public Course getUserCoursesByCourseId(@PathVariable Long courseId) {
	     return courseService.findByCourseId(courseId);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/enroll", method = RequestMethod.POST)
	public Course enrollUser(@RequestBody UserCourse userCourse) {
	     return courseService.saveUserCourse(userCourse);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public Course regiserCourse(@RequestBody CourseData courseData) {
	     return courseService.saveCourse(courseData);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/registerCourseSection", method = RequestMethod.POST)
	public Course regiserCourseSection(@RequestBody CourseSectionData courseSectionData) {
	     return courseService.saveCourseSection(courseSectionData);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/registerCourseContent", method = RequestMethod.POST)
	public CourseContent regiserCourseContent(@RequestBody CourseContentData courseContentData) {
	     return courseService.saveCourseContentData(courseContentData);
	}

	

}
