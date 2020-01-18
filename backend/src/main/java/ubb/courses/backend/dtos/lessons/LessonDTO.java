package ubb.courses.backend.dtos.lessons;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ubb.courses.backend.dtos.BaseDTO;
import ubb.courses.backend.dtos.courses.CourseDTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@EqualsAndHashCode(callSuper = true)
public class LessonDTO extends BaseDTO {

    @NotNull
    @Size(min = 4, max = 32)
    private String subject;

    private String description;

    @NotNull
    private CourseDTO course;

}
