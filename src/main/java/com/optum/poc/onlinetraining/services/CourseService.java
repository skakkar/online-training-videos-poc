package com.optum.poc.onlinetraining.services;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.optum.poc.onlinetraining.dao.CourseContentRepository;
import com.optum.poc.onlinetraining.dao.CourseRepository;
import com.optum.poc.onlinetraining.dao.CourseSectionRepository;
import com.optum.poc.onlinetraining.dao.StudentCourseRepository;
import com.optum.poc.onlinetraining.dao.StudentRepository;
import com.optum.poc.onlinetraining.dto.CourseContentData;
import com.optum.poc.onlinetraining.dto.CourseData;
import com.optum.poc.onlinetraining.dto.CourseSectionData;
import com.optum.poc.onlinetraining.dto.UserCourse;
import com.optum.poc.onlinetraining.entities.Course;
import com.optum.poc.onlinetraining.entities.CourseContent;
import com.optum.poc.onlinetraining.entities.CourseSection;
import com.optum.poc.onlinetraining.entities.Student;
import com.optum.poc.onlinetraining.entities.StudentCourse;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private StudentCourseRepository studentCourseRep;
		
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private CourseSectionRepository courseSectionRepository;
	
	@Autowired
	private CourseContentRepository courseContentRepository;
	
	
	public List<Course> findAllCourses() {
		return courseRepo.findAll();
	}
	
	public void saveCourse(Course courses) {
		 courseRepo.save(courses);
	}
	
	public Course saveUserCourse(UserCourse userCourse) {
		Student student = studentRepository.findById(Long.valueOf(userCourse.getId())).get();
		Course course = courseRepo.findById(userCourse.getCouserId()).get();		
		StudentCourse studentCourse = new StudentCourse();
		studentCourse.setStudent(student);
		studentCourse.setCourse(course);
		studentCourse.setCourseStatus("IN-PROGRESS");
		studentCourse.setCourseMode(course.getCourseMode().toString());
		student.getStudentCourses().add(studentCourse);
		studentCourseRep.save(studentCourse);
		return course;
	}

	public Course findByCourseId(Long courseId) {
		Course course = courseRepo.findById(courseId).get();
		course.getCourseSections().stream().sorted(Comparator.comparing(CourseSection::getId))
		  .collect(Collectors.toSet());
		return  course;
	}

	public Course saveCourse(CourseData courseData) {
		Course course = new Course();
		course.setDescription(courseData.getDescription());
		course.setName(courseData.getName());
		course.setTitle(courseData.getTitle());	
		course.setSessionNumber(courseData.getSessionNumber());
		course.setVideoUrl(courseData.getVideoUrl());
		course.setPreviewImage("https://fakeimg.pl/650x450/000000/");
		return courseRepo.save(course);
	}

	public Course saveCourseSection(CourseSectionData courseSectionData) {
		Course course = courseRepo.findById(courseSectionData.getCouserId()).get();
		CourseSection cs = new CourseSection();
		cs.setDescription(courseSectionData.getName());
		cs.setName(courseSectionData.getName());
		cs.setCourse(course);
		courseSectionRepository.save(cs);
		return course;
	}

	public CourseContent saveCourseContentData(CourseContentData courseContentData) {
		CourseSection cs = courseSectionRepository.findById(courseContentData.getSectionId()).get();
		CourseContent cc = new CourseContent();
		cc.setName(courseContentData.getName());
		cc.setVideoUrl(courseContentData.getVideoUrl());
		cc.setCourseSection(cs);
		courseContentRepository.save(cc);
		return cc;
	}


}
