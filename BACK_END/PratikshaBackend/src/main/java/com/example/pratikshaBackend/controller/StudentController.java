package com.example.pratikshaBackend.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pratikshaBackend.model.*;
import com.example.pratikshaBackend.repository.*;
//import com.pratiksha.projbackend.model.Student;
//import com.pratiksha.projbackend.repository.StudentRepository;
import com.example.pratikshaBackend.repository.*;
import com.example.pratikshaBackend.model.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class StudentController {

	@Autowired
	private com.example.pratikshaBackend.repository.StudentRepository studentRepository;
	@GetMapping("/students")
	public List<Student> getAllStudent(){
		return studentRepository.findAll();
	}
	
}
