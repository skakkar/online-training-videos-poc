package com.optum.poc.onlinetraining.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class StudentCourse implements java.io.Serializable {

	private static final long serialVersionUID = -2981735653211102548L;
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "student_id")
	private Student student;

	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "course_id")
	private Course course;

	private String courseStatus;

	private String courseMode;

	public StudentCourse(){
		
	}
	public StudentCourse(Course course, Student student) {
		this.course = course;
		this.student = student;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public String getCourseStatus() {
		return courseStatus;
	}

	public void setCourseStatus(String courseStatus) {
		this.courseStatus = courseStatus;
	}

	public String getCourseMode() {
		return courseMode;
	}

	public void setCourseMode(String courseMode) {
		this.courseMode = courseMode;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		
		if (!(o instanceof StudentCourse))
			return false;
		StudentCourse that = (StudentCourse) o;
		return Objects.equals(student.getFullName(), that.student.getFullName())
				&& Objects.equals(course.getName(), that.course.getName())
				&& Objects.equals(courseMode, that.courseMode) && Objects.equals(courseStatus, that.courseStatus)
				&& Objects.equals(id, that.id);
	}

	@Override
	public int hashCode() {
		if(student != null && course != null && courseMode != null && courseStatus !=null) {
			return Objects.hash(student.getFullName(), course.getName(), courseMode, courseStatus,id);
		}
		return Objects.hash(courseMode, courseStatus,id);		
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	

	
}
