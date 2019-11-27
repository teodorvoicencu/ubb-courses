package ubb.courses.backend.dtos.courses;

import org.springframework.stereotype.Component;
import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.models.Course;

import java.util.Date;

@Component
public class CourseConverter implements IDTOConverter<CourseDTO, Course> {

    @Override
    public CourseDTO createFrom(Course entity) {
        CourseDTO courseDto = new CourseDTO();
        courseDto.setId(entity.getId());
        courseDto.name = entity.name;
        courseDto.description = entity.getDescription();
        return courseDto;
    }

    @Override
    public Course createFrom(CourseDTO dto) {
        Course course = new Course();
        course.setId(dto.getId());
        course.name = dto.name;
        course.description = dto.description;
        return course;
    }
}
