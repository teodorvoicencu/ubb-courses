package ubb.courses.backend.DTOs;

import ubb.courses.backend.models.Lesson;

public class LessonDTO extends BaseDTO<Lesson, Long> {

    private String title;

    public LessonDTO() {
    }

    public LessonDTO(Lesson lesson) {
        super(lesson.getId());
        title = lesson.getTitle();
    }

    @Override
    public Lesson getModel() {
        Lesson lesson = new Lesson();
        lesson.setId(this.getId());
        lesson.setTitle(title);
        return lesson;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
