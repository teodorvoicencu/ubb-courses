package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ubb.courses.backend.models.Lesson;

import java.util.Collection;

public interface LessonRepository extends JpaRepository<Lesson, Integer> {
    Collection<Lesson> findByCourseId(Integer courseId);
}
