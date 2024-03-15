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
import java.nio.file.Files;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
//    private final String path = "C:\\Springboot\\Trial3\\Images";

//    @PostMapping(value = "/signup", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

    @PostMapping("/add")
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
            @RequestParam("backlog") Integer Backlog,
            @RequestParam("interest") String Interest,
            @RequestParam("portfolio") String Portfolio,
            @RequestParam("experience") String Experience,
            @RequestParam("imageName") String imageName,
            @RequestParam("imagePath") String imagePath,
            @RequestParam("imageType") String imageType,
            @RequestParam("password") String Password,
            @RequestParam("semester") Integer Semester,
            @RequestParam("branch") String Branch
    )  throws IOException{

//        Student student = new Student(Roll,Name,Semester,Branch,DOB,Mobile,Gender,Email,Linkedin,Github,CGPA,Backlog,Skills,Interest,Portfolio,Experience,ImageName,ImagePath,ImageType,Password);
        Student student= new Student(Roll,Name,Semester,Branch,DOB,Mobile,Gender,Email,Linkedin,Github,CGPA,Backlog,Skills,Interest,Portfolio,Experience,imageName,imagePath,imageType,Password);
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

    @GetMapping("/downloadImage/{id}")
    public ResponseEntity<byte[]> StudentImage(@PathVariable("id") int id) throws IOException {
        String fileName=studentRepository.getFileName(id);
        System.out.println(fileName);
        Optional<Student> imageObject=studentRepository.findByAdminImageName(fileName);
        String fullPath = imageObject.get().getImagePath();
        byte[] image= Files.readAllBytes(new File(fullPath).toPath());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
        //return fileName;
    }
}