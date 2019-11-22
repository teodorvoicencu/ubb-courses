package ubb.courses.backend.controllers.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ubb.courses.backend.services.course.ICourseService;

@RestController
@RequestMapping("/courses")
public class CourseController implements ICourseController {

    private final ICourseService courseService;

    @Autowired
    public CourseController(ICourseService courseService) {
        this.courseService = courseService;
    }
}
