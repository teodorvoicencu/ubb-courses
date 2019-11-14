package ubb.courses.backend.dtos;


/**
 * DTO Converter Interface.
 * Used to create converters for specific DTOs and entities.
 *
 * @param <D> the DTO class to convert to/from.
 * @param <E> the entity class to convert to/from.
 */
public interface IDTOConverter<D extends DTO, E> {

    /**
     * Create DTO from entity.
     *
     * @param entity the entity to be converted to DTO.
     * @return the resulted DTO.
     */
    D createFrom(E entity);

    /**
     * Create entity from DTO.
     *
     * @param dto the DTO to be converted to entity.
     * @return the resulted entity.
     */
    E createFrom(D dto);

}
