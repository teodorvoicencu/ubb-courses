package ubb.courses.backend.dtos;

import lombok.Getter;
import lombok.Setter;

/**
 * Base entity dto.
 * Used to map all entities that extend BaseEntity class
 *
 * @see ubb.courses.backend.models.generic.BaseEntity
 */
@Getter
@Setter
public class BaseDTO extends DTO {
    private int id;
}
