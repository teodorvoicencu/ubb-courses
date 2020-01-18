package ubb.courses.backend.dtos.courses;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ubb.courses.backend.dtos.BaseDTO;
import ubb.courses.backend.dtos.lesson.LessonDTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class CourseDTO extends BaseDTO {

    @NotNull
    @Size(min = 4, max = 32)
    private String name;

    @NotNull
    private String description;

    private PersonDTO owner;

    private Set<PersonDTO> students = new HashSet<>();
    private List<LessonDTO> lessons = new ArrayList<>();
}
