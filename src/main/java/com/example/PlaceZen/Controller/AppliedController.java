package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.Applied;
import com.example.PlaceZen.Repository.AppliedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/Applied")
@CrossOrigin
public class AppliedController {
    @Autowired
    private AppliedRepository appliedRepository;

    @PostMapping("/added")
    public ResponseEntity<String> addedApplied(
            @RequestParam("Jobid") int jobid,
            @RequestParam("StudentId") int studentid,
            @RequestParam("date") String currentdate ) throws IOException {
        Applied applied = new Applied(jobid,studentid,currentdate);
        appliedRepository.save(applied);
        return ResponseEntity.ok("Added successful");

    }
    @GetMapping("/check/{Sid}/{Jid}")
    public Integer applied(@PathVariable ("Sid")Integer sid, @PathVariable ("Jid")Integer jid){
        Applied a=appliedRepository.check(sid,jid);
         if(a!=null)
             return 1;
         return  0;
    }





}
