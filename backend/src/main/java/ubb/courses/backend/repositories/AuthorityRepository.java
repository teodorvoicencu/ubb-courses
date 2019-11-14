package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ubb.courses.backend.models.authorization.Authority;
import ubb.courses.backend.models.authorization.AuthorityType;

import java.util.Optional;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Integer> {
    Optional<Authority> findByName(AuthorityType name);
}
