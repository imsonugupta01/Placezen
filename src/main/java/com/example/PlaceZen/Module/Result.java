package com.example.PlaceZen.Module;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int JId;
    private int sid;
    private int CTC;
    private String CName;
    private String Role;
    public Result(int JId, int sid, int CTC, String CName, String role) {
        this.JId = JId;
        this.sid = sid;
        this.CTC = CTC;
        this.CName = CName;
        Role = role;
    }
}
