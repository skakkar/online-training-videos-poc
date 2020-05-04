package com.optum.poc.onlinetraining.dto;

import com.optum.poc.onlinetraining.entities.Student;

public class StudentCourseInfo {

	private Long courseId;
	private Student Student;

	public Long getCourseId() {
		return courseId;
	}

	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}

	public Student getStudent() {
		return Student;
	}

	public void setStudent(Student student) {
		Student = student;
	}

}
