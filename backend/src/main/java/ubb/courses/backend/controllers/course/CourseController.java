package ubb.courses.backend.controllers.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ubb.courses.backend.dtos.courses.CourseConverter;
import ubb.courses.backend.dtos.courses.CourseDTO;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.services.course.ICourseService;

import java.util.ArrayList;

@RestController
@RequestMapping("/courses")
public class CourseController implements ICourseController {

    private final ICourseService courseService;
    private final CourseConverter courseConverter;

    @Autowired
    public CourseController(ICourseService courseService, CourseConverter courseConverter) {
        this.courseService = courseService;
        this.courseConverter = courseConverter;
    }

    @GetMapping
    public ArrayList<CourseDTO> GetAllCourses(){
        ArrayList<CourseDTO> courseDTOs = new ArrayList<>();
        this.courseService.getAllCourses().forEach(course -> courseDTOs.add(courseConverter.createFrom(course)));
        return courseDTOs;
    }
}
