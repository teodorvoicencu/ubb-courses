package ubb.courses.backend.services.course;

import ubb.courses.backend.dtos.courses.CourseDTO;
import ubb.courses.backend.models.Course;

import java.util.Collection;

public interface ICourseService {
    Collection<Course> getAllCourses();

    Course getCourseById(Integer id);

    Course addCourse(Course course);

    void deleteCourse(Integer id);

    Course updateCourse(Course course);

    Course enrollStudent(Integer courseId);
}
