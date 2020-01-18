package ubb.courses.backend.services.lesson;

import ubb.courses.backend.models.lesson.Lesson;

public interface ILessonService {
    Lesson createLesson(Integer courseId, Lesson lesson);

    Lesson reOrderLesson(Integer courseId, Integer lessonId, Integer order);
}
