package webdev.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import webdev.models.User;
import webdev.repositories.UserRepository;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserService {
    @Autowired
    UserRepository repository;

    @PostMapping("/api/user")
    public User createUser(@RequestBody User user){
        return repository.save(user);
    }

    @GetMapping("/api/user")
    public List<User> findAllUsers(){
        return (List<User>) repository.findAll();
    }

    @GetMapping("/api/user/{userId}")
    public User findUserById(@PathVariable("userId") int id) {
        Optional<User> data = repository.findById(id);
        return data.orElse(null);
    }

    @PutMapping("/api/user/{userId}")
    public User updateUser(@PathVariable("userId") int id, @RequestBody User newUser) {
        Optional<User> userData = repository.findById(id);
        if(userData.isPresent()) {
            User user = userData.get();
            user.setFirstName(newUser.getFirstName());
            user.setLastName(newUser.getLastName());
            user.setPassword(newUser.getPassword());
            user.setEmail(newUser.getEmail());
            user.setPhone(newUser.getPhone());
            user.setRole(newUser.getRole());
            user.setDateOfBirth(newUser.getDateOfBirth());
        }
        return null;
    }

    @DeleteMapping("/api/user/{userId}")
    public void deleteUser(@PathVariable("userId") int id) {
        repository.deleteById(id);
    }
}
