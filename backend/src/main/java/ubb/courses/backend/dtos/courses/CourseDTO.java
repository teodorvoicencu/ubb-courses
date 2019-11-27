package ubb.courses.backend.dtos.courses;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ubb.courses.backend.dtos.BaseDTO;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = true)
public class CourseDTO extends BaseDTO {
    @NotNull
    public String name;
    @NotNull
    public String description;

    private Date createdDate;

    private Date modifiedDate;
}
