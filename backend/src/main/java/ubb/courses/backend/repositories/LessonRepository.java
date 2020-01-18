package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ubb.courses.backend.models.lesson.Lesson;

import java.util.Optional;

public interface LessonRepository extends JpaRepository<Lesson, Integer> {
    Optional<Lesson> findByCourse_IdAndOrderIndex(Integer courseId, Integer orderIndex);
}
