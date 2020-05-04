package com.optum.poc.onlinetraining.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomePagelanding {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	  public String landingPage(){
	    return "index";
	  }
}
