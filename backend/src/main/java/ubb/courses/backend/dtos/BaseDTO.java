package ubb.courses.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Base entity dto.
 * Used to map all entities that extend BaseEntity class
 *
 * @see ubb.courses.backend.models.generic.BaseEntity
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BaseDTO extends DTO {
    private Integer id;
}
