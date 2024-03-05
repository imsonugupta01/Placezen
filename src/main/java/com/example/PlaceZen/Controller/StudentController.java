package com.example.PlaceZen.Controller;
import com.example.PlaceZen.Module.Student;
import com.example.PlaceZen.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    private final String path = "C:\\Springboot\\PlaceZen\\Images";
    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/signup", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> RegisterStudent(
            @RequestParam("roll") Integer Roll,
            @RequestParam("name") String Name,
            @RequestParam("dob") String DOB,
            @RequestParam("mobile") String Mobile,
            @RequestParam("gender") String Gender,
            @RequestParam("email") String Email,
            @RequestParam("linkedin") String Linkedin,
            @RequestParam("github") String Github,
            @RequestParam("cgpa") Float CGPA,
            @RequestParam("skills") String Skills,
            @RequestParam("interest") String Interest,
            @RequestParam("portfolio") String Portfolio,
            @RequestParam("experience") String Experience,
            @RequestParam("file")MultipartFile file,
            @RequestParam("password") String Password
    )  throws IOException{
        String fullPath = path + file.getOriginalFilename();
        file.transferTo(new File(fullPath));
        String ImageName = file.getOriginalFilename();
        String ImageType = file.getContentType();
        String ImagePath = fullPath;
        Student student = new Student(Roll,Name,DOB,Mobile,Gender,Email,Linkedin,Github,CGPA,Skills,Interest,Portfolio,Experience,ImageName,ImagePath,ImageType,Password);
        studentRepository.save(student);
        return ResponseEntity.ok("Upload successful");
    }
    @GetMapping("/GetProfile/{Username}/{Password}")
    public int GetProfile(@PathVariable("Username")int username, @PathVariable("Password")String password){
       return studentRepository.getId(username,password);

    }
    @GetMapping("/getStudent/{Id}")
    public Optional<Student> getprofiles(@PathVariable("Id") Integer Id)
    {
        return studentRepository.findById(Id);
    }
}