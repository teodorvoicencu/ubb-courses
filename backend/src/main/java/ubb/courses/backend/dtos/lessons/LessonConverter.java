package ubb.courses.backend.dtos.lessons;

import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.dtos.courses.CourseConverter;
import ubb.courses.backend.models.Lesson;

public class LessonConverter implements IDTOConverter<LessonDTO, Lesson> {

    private final CourseConverter courseConverter;

    public LessonConverter(CourseConverter courseConverter) {
        this.courseConverter = courseConverter;
    }

    @Override
    public LessonDTO createFrom(Lesson entity) {
        LessonDTO lessonDto = new LessonDTO();
        lessonDto.setId(entity.getId());
        lessonDto.setSubject(entity.getSubject());
        lessonDto.setDescription(entity.getDescription());
        lessonDto.setCourse(courseConverter.createFrom(entity.getCourse()));

        return lessonDto;
    }

    @Override
    public Lesson createFrom(LessonDTO dto) {
        Lesson lesson = new Lesson();
        lesson.setId(dto.getId());
        lesson.setSubject(dto.getSubject());
        lesson.setDescription(dto.getDescription());
        lesson.setCourse(this.courseConverter.createFrom(dto.getCourse()));

        return lesson;
    }
}
