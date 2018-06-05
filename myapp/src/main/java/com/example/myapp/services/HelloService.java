package com.example.myapp.services;

import com.example.myapp.models.Hello;
import com.example.myapp.repositories.HelloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloService {
    @Autowired
    HelloRepository repository;

    @GetMapping("/api/hello")
    public Iterable<Hello> findAllHellos() {
        return repository.findAll();
    }

    @PostMapping("/api/hello")
    public Hello createHello(@RequestBody Hello hello) {
        return repository.save(hello);
    }

    @DeleteMapping("/api/hello/{helloId}")
    public void deleteHello(@PathVariable("helloId") int id) {
        repository.deleteById(id);
    }
}
