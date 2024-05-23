package com.example.PlaceZen.Repository;

import com.example.PlaceZen.Module.Result;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends CrudRepository<Result,Integer> {
}
