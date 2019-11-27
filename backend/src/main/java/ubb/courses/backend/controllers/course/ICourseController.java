package ubb.courses.backend.controllers.course;

import ubb.courses.backend.dtos.courses.CourseDTO;

import java.util.ArrayList;

public interface ICourseController {
    public ArrayList<CourseDTO> GetAllCourses();
}
