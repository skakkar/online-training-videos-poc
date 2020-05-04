package com.optum.poc.onlinetraining.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.optum.poc.onlinetraining.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

	public Student findOneByUsername(String username);

}
