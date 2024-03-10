package com.example.PlaceZen.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OnlineHiring {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int JobId;
    private String CompanyName;
    private String Role;
    private float Cgpa;
    private float CTC;
    private int Backlog;
    private int StartSession;
    private int Semester;
    private String Branch;
    private String Description;
    private String Location;
    private int Experience;
    private String StartDate;
    private String EndDate;

    public OnlineHiring(String companyName, String role, float cgpa, float CTC, int backlog, int startSession, int semester, String branch, String description, String location, int experience, String startDate, String endDate) {
        CompanyName = companyName;
        Role = role;
        Cgpa = cgpa;
        this.CTC = CTC;
        Backlog = backlog;
        StartSession = startSession;
        Semester = semester;
        Branch = branch;
        Description = description;
        Location = location;
        Experience = experience;
        StartDate = startDate;
        EndDate = endDate;
    }
}
