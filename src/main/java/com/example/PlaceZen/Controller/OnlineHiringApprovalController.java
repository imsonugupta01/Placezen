package com.example.PlaceZen.Controller;

import com.example.PlaceZen.Module.OnlineHiring;
import com.example.PlaceZen.Module.OnlineHiringApproval;
import com.example.PlaceZen.Module.SignUpApprovals;
import com.example.PlaceZen.Repository.OnlineHiringApprovalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/OnlineApproval")
@CrossOrigin
public class OnlineHiringApprovalController {
    @Autowired
    private OnlineHiringApprovalRepository onlineHiringApprovalRepository;

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/adds")
    public ResponseEntity<String> AddOnlineHirings(
            @RequestParam("Company") String companyName,
            @RequestParam("Role") String role,
            @RequestParam("Apply") String link

    )  throws IOException {
        OnlineHiringApproval approval = new OnlineHiringApproval(companyName,role,link);
        onlineHiringApprovalRepository.save(approval);
        return ResponseEntity.ok("Upload successful");
    }

    @GetMapping("/allApprovals")
    public List<OnlineHiringApproval> AllOnlineApproval(){
        return (List<OnlineHiringApproval>) onlineHiringApprovalRepository.findAll();
    }
}
