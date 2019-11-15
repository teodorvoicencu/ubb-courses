package ubb.courses.backend.DTOs;

import lombok.Getter;
import lombok.Setter;
import ubb.courses.backend.models.Course;

import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
public class CourseDTO extends BaseDTO<Course, Long> {

    private String title;

    private Date createdAt;

    private Set<LessonDTO> lessons;

    public CourseDTO() {
    }

    public CourseDTO(Course course) {
        super(course.getId());
        title = course.getTitle();
        createdAt = course.getCreatedAt();
        lessons = course.getLessons().stream().map(LessonDTO::new).collect(Collectors.toSet());
    }

    @Override
    public Course getModel() {
        Course course = new Course();
        course.setId(this.getId());
        course.setTitle(title);
        course.setCreatedAt(createdAt);
        course.setLessons(lessons.stream().map(LessonDTO::getModel).collect(Collectors.toSet()));
        return course;
    }
}
