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
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int Roll;
    private String Name;
    private String DOB;
    private String Mobile;
    private String Gender;
    private String Email;
    private String Linkedin;
    private String Github;
    private Float Cgpa;
    private String Skills;
    private String Interest;
    private String Portfolio;
    private String Experience;
    private String ImageName;
    private String ImagePath;
    private String ImageType;
    private String Password;

    public Student(int roll, String name, String DOB, String mobile, String gender, String email, String linkedin, String github, Float cgpa, String skills, String interest, String portfolio, String experience, String imageName, String imagePath, String imageType, String password) {
        Roll = roll;
        Name = name;
        this.DOB = DOB;
        Mobile = mobile;
        Gender = gender;
        Email = email;
        Linkedin = linkedin;
        Github = github;
        Cgpa = cgpa;
        Skills = skills;
        Interest = interest;
        Portfolio = portfolio;
        Experience = experience;
        ImageName = imageName;
        ImagePath = imagePath;
        ImageType = imageType;
        Password = password;
    }
}

