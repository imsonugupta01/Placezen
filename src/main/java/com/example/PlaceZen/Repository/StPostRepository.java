package com.example.PlaceZen.Repository;

import com.example.PlaceZen.Module.StPostMaterial;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StPostRepository  extends CrudRepository<StPostMaterial,Integer> {
}
