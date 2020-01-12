package ubb.courses.backend.dtos.courses;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import ubb.courses.backend.dtos.BaseDTO;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class OwnerDTO extends BaseDTO {
    private String name;

    public OwnerDTO(Integer id, String name){
        super(id);
        this.name=name;
    }
}
