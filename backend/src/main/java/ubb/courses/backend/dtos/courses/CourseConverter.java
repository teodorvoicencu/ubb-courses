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
        courseDto.setName(entity.getName());
        courseDto.setDescription(entity.getDescription());
        OwnerDTO ownerDTO = new OwnerDTO(entity.getOwner().getId(),entity.getOwner().getName());
        courseDto.setOwner(ownerDTO);
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
