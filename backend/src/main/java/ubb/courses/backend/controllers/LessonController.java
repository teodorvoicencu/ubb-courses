package ubb.courses.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ubb.courses.backend.DTOs.LessonDTO;
import ubb.courses.backend.services.LessonService;

import java.util.Set;

@Controller
@RequestMapping("/api/lesson")
public class LessonController implements CrudController<LessonDTO>{

    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @Override
    public ResponseEntity<Set<LessonDTO>> getAll() {
        return ResponseEntity.ok(lessonService.getAll());
    }

    @Override
    public ResponseEntity<LessonDTO> getOne(Long id) {
        return ResponseEntity.ok(lessonService.findById(id));
    }

    @Override
    public ResponseEntity create(LessonDTO dto) {
        return ResponseEntity.ok(lessonService.create(dto));
    }

    @Override
    public ResponseEntity update(LessonDTO dto) {
        return ResponseEntity.ok(lessonService.update(dto));
    }

    @Override
    public ResponseEntity delete(Long id) {
        lessonService.delete(id);
        return ResponseEntity.ok(null);
    }
}
