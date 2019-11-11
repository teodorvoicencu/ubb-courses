package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ubb.courses.backend.models.Lesson;

public interface LessonRepository extends JpaRepository<Lesson, Long> {
}
