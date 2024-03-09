package com.example.PlaceZen.Repository;

import com.example.PlaceZen.Module.Applied;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppliedRepository extends CrudRepository<Applied,Integer> {
}
