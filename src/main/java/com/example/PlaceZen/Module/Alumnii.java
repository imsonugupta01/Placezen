package com.example.PlaceZen.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@ToString
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Alumnii {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int Roll;
    private String JobName;
    private String JobRole;
    private float CTC;
    private String Description;

    public Alumnii(int roll, String jobName, String jobRole, float CTC, String description) {
        Roll = roll;
        JobName = jobName;
        JobRole = jobRole;
        this.CTC = CTC;
        Description = description;
    }
}
