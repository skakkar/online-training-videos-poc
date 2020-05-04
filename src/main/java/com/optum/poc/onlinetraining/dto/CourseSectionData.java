package com.optum.poc.onlinetraining.dto;

public class CourseSectionData {

	private String name;
	private String description;
	private Long couserId;

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

	public Long getCouserId() {
		return couserId;
	}

	public void setCouserId(Long couserId) {
		this.couserId = couserId;
	}

}
