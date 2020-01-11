package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(MediaTypeEnum.Values.TEXT)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TextMedia extends Media {

    @Builder
    public TextMedia(Integer orderIndex, Course course, String text) {
        super(orderIndex, course);
        this.text = text;
    }

    private String text;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.TEXT;
    }
}
