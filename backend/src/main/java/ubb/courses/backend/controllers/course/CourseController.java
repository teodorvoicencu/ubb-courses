package ubb.courses.backend.controllers.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ubb.courses.backend.dtos.courses.CourseConverter;
import ubb.courses.backend.dtos.courses.CourseDTO;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.services.course.ICourseService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

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

    @GetMapping("/all")
    public ResponseEntity<Collection<CourseDTO>> getAllCourses() {
        return ResponseEntity.ok(this.courseService.getAllCourses().stream()
                .map(this.courseConverter::createFrom).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourseById(@PathVariable Integer id) {
        return ResponseEntity.ok(this.courseConverter.createFrom(this.courseService.getCourseById(id)));
    }

    @PostMapping
    public  void addCourse(@RequestBody CourseDTO course){
        this.courseService.addCourse(this.courseConverter.createFrom(course));
    }
}
