package com.optum.poc.onlinetraining.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.optum.poc.onlinetraining.dao.CourseRepository;
import com.optum.poc.onlinetraining.dao.StudentCourseRepository;
import com.optum.poc.onlinetraining.dao.StudentRepository;
import com.optum.poc.onlinetraining.dto.StudentCourseInfo;
import com.optum.poc.onlinetraining.entities.Course;
import com.optum.poc.onlinetraining.entities.Student;
import com.optum.poc.onlinetraining.entities.StudentCourse;

@Service
public class StudentService {

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	StudentCourseRepository studentCourseRepository;

	@Autowired
	CourseRepository courseRepo;

	@Autowired
	private StudentCourseRepository studentCourseRep;

	@Transactional
	public Student save(StudentCourseInfo user) {
		if (user.getCourseId() != null && user.getCourseId() != 0) {
			studentRepository.saveAndFlush(user.getStudent());
			Course course = courseRepo.findById(user.getCourseId()).get();
			StudentCourse studentCourse = new StudentCourse();
			studentCourse.setStudent(user.getStudent());
			studentCourse.setCourse(course);
			studentCourse.setCourseStatus("IN-PROGRESS");
			studentCourse.setCourseMode("Online");
			user.getStudent().getStudentCourses().add(studentCourse);
			studentCourseRep.save(studentCourse);
			studentCourseRepository.saveAll(user.getStudent().getStudentCourses());
		} else {
			studentRepository.saveAndFlush(user.getStudent());
		}
		return user.getStudent();
	}

	public Student update(Student user) {
		return studentRepository.save(user);
	}

	public Student find(String userName) {
		return studentRepository.findOneByUsername(userName);
	}

	public Student find(Long id) {
		return studentRepository.findById(id).get();
	}
}
