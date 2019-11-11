package ubb.courses.backend.services;

import org.springframework.stereotype.Service;
import ubb.courses.backend.DTOs.LessonDTO;
import ubb.courses.backend.models.Lesson;
import ubb.courses.backend.repositories.LessonRepository;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class LessonService {

    private final LessonRepository lessonRepository;

    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    public Set<LessonDTO> getAll() {
        return lessonRepository.findAll().stream().map(LessonDTO::new).collect(Collectors.toSet());
    }

    public LessonDTO findById(Long id) {
        return new LessonDTO(lessonRepository.getOne(id));
    }

    public LessonDTO create(LessonDTO dto) {
        Lesson lesson = dto.getModel();
        lessonRepository.save(lesson);
        return new LessonDTO(lessonRepository.getOne(lesson.getId()));
    }

    public LessonDTO update(LessonDTO dto) {
        final Lesson lesson = lessonRepository.getOne(dto.getId());
        lesson.setTitle(dto.getTitle());

        lessonRepository.save(lesson);

        return new LessonDTO(lesson);
    }

    public void delete(Long id) {
        final Lesson lesson = lessonRepository.getOne(id);
        lessonRepository.delete(lesson);
    }
}
