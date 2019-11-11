package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ubb.courses.backend.models.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
