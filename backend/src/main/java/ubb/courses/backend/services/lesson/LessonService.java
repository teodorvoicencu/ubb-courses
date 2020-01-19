package ubb.courses.backend.services.lesson;

import org.springframework.stereotype.Service;
import ubb.courses.backend.controllers.exceptions.lesson.LessonException;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.lesson.Lesson;
import ubb.courses.backend.repositories.CourseRepository;
import ubb.courses.backend.repositories.LessonRepository;

@Service
public class LessonService implements ILessonService {
    private final CourseRepository courseRepository;
    private final LessonRepository lessonRepository;

    public LessonService(CourseRepository courseRepository, LessonRepository lessonRepository) {
        this.courseRepository = courseRepository;
        this.lessonRepository = lessonRepository;
    }

    @Override
    public Lesson createLesson(Integer courseId, Lesson lesson) {
        Course course = this.courseRepository
                .findById(courseId)
                .orElseThrow(() -> new LessonException("Course not found!"));

        lesson.setOrderIndex(course.getLessons().size());
        lesson.setCourse(course);

        return lessonRepository.save(lesson);
    }

    @Override
    public Lesson reOrderLesson(Integer courseId, Integer lessonId, Integer order) {
        Lesson firstLesson = this.lessonRepository
                .findById(lessonId)
                .orElseThrow(() -> new LessonException("Lesson not found!"));

        Course course = this.courseRepository
                .findById(courseId)
                .orElseThrow(() -> new LessonException("Course not found!"));

        if (course.getLessons().size() <= order || order < 0)
            throw new LessonException("Invalid order index");

        Lesson secondLesson = this.lessonRepository
                .findByCourse_IdAndOrderIndex(courseId, order)
                .orElseThrow(() -> new LessonException("Lesson to be swapped with not found!"));

        secondLesson.setOrderIndex(firstLesson.getOrderIndex());
        lessonRepository.save(secondLesson);

        firstLesson.setOrderIndex(order);
        return lessonRepository.save(firstLesson);
    }

}
