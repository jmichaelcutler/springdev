package webdev.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import webdev.models.User;
import webdev.repositories.UserRepository;

import java.util.List;

@RestController
public class UserService {
    @Autowired
    UserRepository repository;

    @GetMapping("/api/user")
    public List<User> findAllUsers(){
        return (List<User>) repository.findAll();
    }
}
