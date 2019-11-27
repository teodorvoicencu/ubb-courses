package ubb.courses.backend.dtos.courses;

import org.springframework.stereotype.Component;
import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.models.Course;

@Component
public class CourseConverter implements IDTOConverter<CourseDTO, Course> {

    @Override
    public CourseDTO createFrom(Course entity) {
        CourseDTO courseDto = new CourseDTO();
        courseDto.setId(entity.getId());
        courseDto.name = entity.name;
        courseDto.description = entity.getDescription();
        courseDto.setCreatedDate(entity.getCreatedDate());
        courseDto.setModifiedDate(entity.getModifiedDate());
        return courseDto;
    }

    @Override
    public Course createFrom(CourseDTO dto) {
        Course course = new Course();
        course.setId(dto.getId());
        course.name = dto.name;
        course.description = dto.description;
        course.setCreatedDate(dto.getCreatedDate());
        course.setModifiedDate(dto.getModifiedDate());
        return course;
    }
}
