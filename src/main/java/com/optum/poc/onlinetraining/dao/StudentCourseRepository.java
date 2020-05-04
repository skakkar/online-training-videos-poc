package com.optum.poc.onlinetraining.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.optum.poc.onlinetraining.entities.StudentCourse;

@Repository
public interface StudentCourseRepository  extends JpaRepository<StudentCourse, Long> {

}
