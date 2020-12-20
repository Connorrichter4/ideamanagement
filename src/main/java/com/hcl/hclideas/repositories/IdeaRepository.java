package com.hcl.hclideas.repositories;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hcl.hclideas.modal.Idea;
import com.hcl.hclideas.modal.User;

@RepositoryRestResource(collectionResourceRel = "idea", path = "idea")
public interface IdeaRepository extends PagingAndSortingRepository<Idea, Long> {
}
