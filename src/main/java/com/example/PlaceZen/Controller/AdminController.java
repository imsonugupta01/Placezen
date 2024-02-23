package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;
    @GetMapping("/getId/{username}/{password}")
    public int getProfileId(@PathVariable("username") String username,@PathVariable("password") String password)
    {
        return  adminRepository.getbyUsername(username,password);
    }
}
