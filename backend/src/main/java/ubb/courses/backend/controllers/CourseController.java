package ubb.courses.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import ubb.courses.backend.DTOs.CourseDTO;
import ubb.courses.backend.services.CourseService;

import java.util.Set;

@Controller
@RequestMapping("/api/course")
public class CourseController implements CrudController<CourseDTO>{

    private CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @Override
    public ResponseEntity<Set<CourseDTO>> getAll() {
        return ResponseEntity.ok(courseService.getAll());
    }

    @Override
    public ResponseEntity<CourseDTO> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(courseService.findById(id));
    }

    @Override
    public ResponseEntity create(CourseDTO dto) {
        return ResponseEntity.ok(courseService.create(dto));
    }

    @Override
    public ResponseEntity update(CourseDTO dto) {
        return ResponseEntity.ok(courseService.update(dto));
    }

    @Override
    public ResponseEntity delete(Long id) {
        courseService.delete(id);
        return ResponseEntity.ok(null);
    }
}
