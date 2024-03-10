package com.example.PlaceZen.Repository;

import com.example.PlaceZen.Module.Applied;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AppliedRepository extends CrudRepository<Applied,Integer> {
    @Query("SELECT m FROM Applied m WHERE m.jobId=:Jid AND m.studentId=:Sid")
    public Applied check(@Param("Sid")Integer Sid,@Param("Jid")Integer Jid);
}
