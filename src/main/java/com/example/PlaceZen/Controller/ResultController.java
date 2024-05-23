package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.*;
import com.example.PlaceZen.Repository.HiringRepository;
import com.example.PlaceZen.Repository.ResultRepository;
import com.example.PlaceZen.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/result")

public class ResultController {
    @Autowired
    private ResultRepository resultRepository;
    @Autowired
    private HiringRepository hiringRepository;
    @Autowired
    private StudentRepository studentRepository;

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

    @GetMapping("/verify/{Sid}/{Jid}")
   public int check(@PathVariable("Sid")Integer Sid,@PathVariable("Jid") Integer Jid)
    {int cnt=0;
        Float ctc= Float.valueOf(hiringRepository.findById(Jid).get().getCTC());
        Integer StudId=studentRepository.findID(Sid);
        List<Result> results= (List<Result>) resultRepository.findAll();
        for(int i=0;i<results.size();i++)
        {
            if(results.get(i).getSId()==StudId && results.get(i).getCTC()>=ctc)
            {
                cnt++;
            }
        }
        return cnt;
    }







}
