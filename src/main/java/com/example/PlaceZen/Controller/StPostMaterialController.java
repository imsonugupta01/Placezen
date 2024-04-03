package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.StPostMaterial;
import com.example.PlaceZen.Repository.StPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/post")
public class StPostMaterialController {
    @Autowired
    private StPostRepository stPostRepository;
    private  final String PATH="D:\\SpringbootProject\\Trial2\\Documents";

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

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

//    @GetMapping("/material/all")
//    public ResponseEntity<ByteArrayResource> downloadDocument(@PathVariable Integer documentId) {
//        // Retrieve the document details from the repository based on the documentId
//     List<StPostMaterial> list  = (List<StPostMaterial>) stPostRepository.findAll();
////             .orElse(null);
//
//        if (list == null) {
//            return ResponseEntity.notFound().build();
//        }
//
//        String filePath = doc.getFilepath();
//        Path path = Paths.get(filePath);
//
//        try {
//            byte[] documentContent = Files.readAllBytes(path);
//            ByteArrayResource resource = new ByteArrayResource(documentContent);
//
//            return ResponseEntity.ok()
//                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + doc.getFilename())
//                    .contentType(MediaType.APPLICATION_PDF) // Set the appropriate content type for PDF
//                    .contentLength(documentContent.length)
//                    .body(resource); // No need for explicit casting here
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }


}
