package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.Applied;
import com.example.PlaceZen.Module.Student;
import com.example.PlaceZen.Module.StudentRespose;
import com.example.PlaceZen.Repository.AppliedRepository;
import com.example.PlaceZen.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/Applied")
@CrossOrigin
public class AppliedController {
    @Autowired
    private AppliedRepository appliedRepository;
    @Autowired
    private StudentRepository studentRepository;

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



        @GetMapping("/search/{Jid}")
    public List<StudentRespose> nothing(@PathVariable ("Jid") Integer Jid ){

              List<StudentRespose> studentResposeList =new ArrayList<>();
              List<Applied> appList;
              appList= (List<Applied>) appliedRepository.findAllById(Collections.singleton(Jid));
              List<Student> stList;
              stList= (List<Student>) studentRepository.findAll();

              for(int i=0;i<appList.size();i++)
              {  
                  for(int j=0;j<stList.size();j++)
                  { 
                      if(appList.get(i).getStudentId()==stList.get(j).getId())
                      { StudentRespose studentRespose = new StudentRespose();
                        studentRespose.setName(stList.get(j).getName());
                        studentRespose.setRoll(stList.get(j).getRoll());
                        studentRespose.setDate(appList.get(i).getDate());
                          studentResposeList.add(studentRespose);

                      }
                  }
              }
              return studentResposeList;

    }







}
