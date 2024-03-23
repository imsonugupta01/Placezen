package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.OnlineHiring;
import com.example.PlaceZen.Module.Result;
import com.example.PlaceZen.Repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/result")

public class ResultController {
    @Autowired
    private ResultRepository resultRepository;

    @PostMapping("/add")
    public ResponseEntity<String> addResults(@RequestBody List<Result> results) {
        try {
            // Save all the results
            resultRepository.saveAll(results);
            return ResponseEntity.ok("Added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error occurred while saving results");
        }
    }
}
