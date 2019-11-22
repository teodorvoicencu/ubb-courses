package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ubb.courses.backend.models.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
}
