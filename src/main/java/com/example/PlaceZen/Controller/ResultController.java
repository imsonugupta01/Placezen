package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.OnlineHiring;
import com.example.PlaceZen.Module.Result;
import com.example.PlaceZen.Module.ResultShow;
import com.example.PlaceZen.Repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/result")

public class ResultController {
    @Autowired
    private ResultRepository resultRepository;

    @PostMapping("/add")
    public ResponseEntity<String> addResults(@RequestBody List<Result> results) {
        try {
            resultRepository.saveAll(results);
            return ResponseEntity.ok("Added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error occurred while saving results");
        }
    }
    @GetMapping("/allC")
    public Set<String> allCompany(){
        List<Result> results= (List<Result>) resultRepository.findAll();
        Set<String> set = new HashSet<String>();
        for(int i=0;i<results.size();i++)
        {
            set.add(results.get(i).getCName());
        }
        return set;
    }
    @GetMapping("/StResult")
    public List<Result> findallresult(){
        return (List<Result>) resultRepository.findAll();
    }


}
