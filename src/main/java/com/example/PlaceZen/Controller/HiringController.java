package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.Hiring;
import com.example.PlaceZen.Repository.HiringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Hiring")
@CrossOrigin
public class HiringController {
    @Autowired
    private HiringRepository hiringRepository;
    @PostMapping("/add")
    public ResponseEntity<String> addhiring(

        @RequestParam("company") String Company,
        @RequestParam("role") String Role,
        @RequestParam("cgpa") float Cgpa,
        @RequestParam("CTC") float CTC,
        @RequestParam("backlog") int Backlogs,
        @RequestParam("session") int Session,
        @RequestParam("semester") int Semester,
        @RequestParam("branch") String Branch,
        @RequestParam("desciption") String Description,
        @RequestParam("Location") String location,
        @RequestParam("Date1") String date1,
        @RequestParam("Date2") String date2) throws IOException {

        //Hiring hiring=new Hiring(Company,Role,Cgpa,CTC,Backlogs,Session,Semester,Branch,Description,location,date1,date2);
        Hiring hiring = new Hiring(Company,Role,Cgpa,CTC,Backlogs,Session,Semester,Branch,Description,location,date1,date2);
        hiringRepository.save(hiring);
        return ResponseEntity.ok("Added successful");

    }
    @GetMapping("/get")
    public List<Hiring> thisthat(){
        return (List<Hiring>) hiringRepository.findAll();

    }
    @GetMapping("/fetch/{Id}")
    public Optional<Hiring> fetching(@PathVariable("Id")Integer id){
        return hiringRepository.findById(id);
    }
}
