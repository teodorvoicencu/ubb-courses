package ubb.courses.backend.services;

import org.springframework.stereotype.Service;
import ubb.courses.backend.DTOs.CourseDTO;
import ubb.courses.backend.DTOs.LessonDTO;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.repositories.CourseRepository;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Set<CourseDTO> getAll() {
        return courseRepository.findAll().stream().map(CourseDTO::new).collect(Collectors.toSet());
    }

    public CourseDTO findById(Long id) {
        return new CourseDTO(courseRepository.getOne(id));
    }

    public CourseDTO create(CourseDTO dto) {
        Course course = dto.getModel();
        courseRepository.save(course);
        return new CourseDTO(courseRepository.getOne(course.getId()));
    }

    public CourseDTO update(CourseDTO dto) {
        final Course course = courseRepository.getOne(dto.getId());
        course.setTitle(dto.getTitle());
        course.setCreatedAt(dto.getCreatedAt());
        course.setLessons(dto.getLessons().stream().map(LessonDTO::getModel).collect(Collectors.toSet()));

        courseRepository.save(course);

        return new CourseDTO(course);
    }

    public void delete(Long id) {
        final Course course = courseRepository.getOne(id);
        courseRepository.delete(course);
    }
}
