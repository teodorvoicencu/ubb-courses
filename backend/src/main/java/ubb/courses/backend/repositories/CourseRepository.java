package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ubb.courses.backend.models.Course;

import java.util.ArrayList;
import java.util.Collection;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
}
