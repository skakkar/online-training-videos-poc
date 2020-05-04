package com.optum.poc.onlinetraining.dto;

import java.util.Arrays;

public enum CourseMode {

	ONLINE("ONLINE"),CLASSROOM("CLASSROOM");
	
	private String value;

	private CourseMode(String value) {
		this.value = value;
	}

	public static CourseMode fromValue(String value) {
		for (CourseMode courseMode : values()) {
			if (courseMode.value.equalsIgnoreCase(value)) {
				return courseMode;
			}
		}
		throw new IllegalArgumentException(
				"Unknown enum type " + value + ", Allowed values are " + Arrays.toString(values()));
	}
}
