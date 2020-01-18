package ubb.courses.backend.dtos.courses;

import org.springframework.stereotype.Component;
import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.dtos.lesson.LessonDTO;
import ubb.courses.backend.models.Course;

import java.util.stream.Collectors;

@Component
public class CourseConverter implements IDTOConverter<CourseDTO, Course> {

    @Override
    public CourseDTO createFrom(Course entity) {
        CourseDTO courseDto = new CourseDTO();
        courseDto.setId(entity.getId());
        courseDto.setName(entity.getName());
        courseDto.setDescription(entity.getDescription());
        PersonDTO ownerDTO = new PersonDTO(entity.getOwner().getId(), entity.getOwner().getName(), entity.getOwner().getEmail());
        courseDto.setStudents(entity.getStudents()
                .stream()
                .map(enrollment ->
                        new PersonDTO(
                                enrollment.getUser().getId(),
                                enrollment.getUser().getName(),
                                enrollment.getUser().getEmail()))
                .collect(Collectors.toSet()));
        courseDto.setOwner(ownerDTO);
        courseDto.setLessons(entity.getLessons()
                .stream()
                .map(LessonDTO::new)
                .collect(Collectors.toList()));
        return courseDto;
    }

    @Override
    public Course createFrom(CourseDTO dto) {
        Course course = new Course();
        course.setId(dto.getId());
        course.setName(dto.getName());
        course.setDescription(dto.getDescription());
        return course;
    }
}
