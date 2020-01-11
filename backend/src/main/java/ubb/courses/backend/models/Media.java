package ubb.courses.backend.models;

import lombok.*;
import ubb.courses.backend.models.MediaTypes.MediaTypeEnum;
import ubb.courses.backend.models.generic.BaseEntity;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "media_type", discriminatorType = DiscriminatorType.INTEGER)
@Table(name = "media")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public abstract class Media extends BaseEntity {

    private Integer orderIndex;

    @ManyToOne(fetch = FetchType.LAZY)
    private Course course;

    public abstract MediaTypeEnum getType();

}
