package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.StPostMaterial;
import com.example.PlaceZen.Repository.StPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/post")
public class StPostMaterialController {
    @Autowired
    private StPostRepository stPostRepository;
    private  final String PATH="";

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/uploadDocument", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

    public ResponseEntity<String> uploadDocument(
            @RequestParam("sid") Integer Id,
            @RequestParam("date") String date,
            @RequestParam("discription") String Disciption,
            @RequestParam("documentFile") MultipartFile file) throws IOException {

        String fullPath = PATH+ file.getOriginalFilename();
        file.transferTo(new File(fullPath));

        String documentFileName = file.getOriginalFilename();
        String documentFileType = file.getContentType();
        String documentPath = fullPath;


        StPostMaterial stPostMaterial=new StPostMaterial(Id,Disciption,date,documentFileName,documentFileType,documentPath);
        stPostRepository.save(stPostMaterial);

        return ResponseEntity.ok("Document upload successful");
    }

}
