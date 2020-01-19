package ubb.courses.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ubb.courses.backend.annotations.IsCourseOwner;
import ubb.courses.backend.annotations.IsStudent;
import ubb.courses.backend.annotations.IsTeacher;
import ubb.courses.backend.dtos.courses.CourseConverter;
import ubb.courses.backend.dtos.courses.CourseDTO;
import ubb.courses.backend.dtos.lesson.LessonConverter;
import ubb.courses.backend.dtos.lesson.LessonDTO;
import ubb.courses.backend.dtos.lesson.ReorderOperationDTO;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.services.course.ICourseService;
import ubb.courses.backend.services.lesson.ILessonService;

import javax.validation.Valid;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/courses")
public class CourseController  {

    private final ICourseService courseService;
    private final ILessonService lessonService;

    private final CourseConverter courseConverter;
    private final LessonConverter lessonConverter;

    @Autowired
    public CourseController(ICourseService courseService, CourseConverter courseConverter, LessonConverter lessonConverter, ILessonService lessonService) {
        this.courseService = courseService;
        this.courseConverter = courseConverter;
        this.lessonConverter = lessonConverter;
        this.lessonService = lessonService;
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

    @IsCourseOwner
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Integer id) {
        this.courseService.deleteCourse(id);
    }

    @IsCourseOwner
    @PutMapping("/{id}")
    public ResponseEntity<CourseDTO> updateCourse(@PathVariable Integer id, @Valid @RequestBody CourseDTO courseDTO) {
        Course course = this.courseConverter.createFrom(courseDTO);
        course.setId(id);
        return ResponseEntity.ok(this.courseConverter.createFrom(this.courseService.updateCourse(course)));
    }

    @IsStudent
    @PostMapping("{id}/enroll")
    public ResponseEntity<CourseDTO> enroll(@PathVariable Integer id) {
        return ResponseEntity.ok(this.courseConverter.createFrom(this.courseService.enrollStudent(id)));
    }

    @IsCourseOwner
    @PostMapping("/{id}/lessons")
    public ResponseEntity<LessonDTO> createLesson(@PathVariable Integer id, @RequestBody LessonDTO lessonDTO) {
        return ResponseEntity.ok(
                this.lessonConverter.createFrom(
                        this.lessonService.createLesson(
                                id, this.lessonConverter.createFrom(lessonDTO)))
        );
    }

    @IsCourseOwner
    @PostMapping("/{id}/lessons/{lessonId}")
    public ResponseEntity<LessonDTO> reOrderLesson(
            @PathVariable Integer id,
            @PathVariable Integer lessonId,
            @RequestBody ReorderOperationDTO reorderOperation
    ) {
        int orderIndex = reorderOperation.getOrder();
        return ResponseEntity.ok(
                this.lessonConverter.createFrom(
                        this.lessonService.reOrderLesson(id, lessonId, orderIndex))
        );
    }

}
