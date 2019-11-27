package ubb.courses.backend.controllers.course;

import org.springframework.http.ResponseEntity;
import ubb.courses.backend.dtos.courses.CourseDTO;

import java.util.Collection;

public interface ICourseController {
    ResponseEntity<Collection<CourseDTO>> getAllCourses();
}
