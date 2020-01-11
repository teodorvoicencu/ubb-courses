package ubb.courses.backend.controllers.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ubb.courses.backend.annotations.IsTeacher;
import ubb.courses.backend.dtos.courses.CourseConverter;
import ubb.courses.backend.dtos.courses.CourseDTO;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.services.course.ICourseService;
import ubb.courses.backend.services.security.ISecurityService;

import javax.validation.Valid;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/courses")
public class CourseController implements ICourseController {

    private final ICourseService courseService;
    private final CourseConverter courseConverter;

    @Autowired
    public CourseController(ICourseService courseService, ISecurityService securityService, CourseConverter courseConverter) {
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

    @IsTeacher
    @PostMapping
    public ResponseEntity<CourseDTO> addCourse(@RequestBody CourseDTO course) {
        return ResponseEntity.ok(
                this.courseConverter.createFrom(this.courseService.addCourse(this.courseConverter.createFrom(course)))
        );
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Integer id) {
        this.courseService.deleteCourse(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseDTO> updateCourse(@PathVariable Integer id, @Valid @RequestBody CourseDTO courseDTO) {
        Course course = this.courseConverter.createFrom(courseDTO);
        course.setId(id);
        return ResponseEntity.ok(this.courseConverter.createFrom(this.courseService.updateCourse(course)));
    }
}
