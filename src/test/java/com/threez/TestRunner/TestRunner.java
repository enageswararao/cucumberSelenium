package com.threez.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(
		features="src\\test\\resources\\features",
		glue= {"com.threez.stepdefinitions"},
		plugin = {"pretty", "html:target/cucumber-html-report",
				  "json:target/cucumber.json",
				   "junit:target/cucumber.xml",},
		tags= {"@test"},
		dryRun=false,
		strict=false,
		monochrome = false
		)
public class TestRunner {

}
