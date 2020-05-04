package com.optum.poc.onlinetraining.entities;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "course_section")
public class CourseSection implements Serializable, Comparable<CourseSection> {

	private static final long serialVersionUID = -1190490253693716460L;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String description;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JsonBackReference
	@JoinColumn(name = "course_id")
	private Course course;

	@OneToMany(mappedBy = "courseSection", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonManagedReference
	private Set<CourseContent> courseContents;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<CourseContent> getCourseContents() {
		return courseContents;
	}

	public void setCourseContents(Set<CourseContent> courseContents) {
		this.courseContents = courseContents;
	}


	@Override
	public int compareTo(CourseSection courseSection) {
		return id.compareTo(courseSection.getId());
	}

}
