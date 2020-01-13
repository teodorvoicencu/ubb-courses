package ubb.courses.backend.dtos.courses;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ubb.courses.backend.dtos.BaseDTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@EqualsAndHashCode(callSuper = true)
public class CourseDTO extends BaseDTO {

    @NotNull
    @Size(min = 4, max = 32)
    private String name;

    @NotNull
    private String description;

    private OwnerDTO owner;
}
