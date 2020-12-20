package com.hcl.hclideas.repositories;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hcl.hclideas.modal.User;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
	Optional<User> findOneByEmailIdAndPassword(String emailId, String password);
}
