package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("0")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TextMedia extends Media {

    @Builder
    public TextMedia(Course course, String text) {
        super(course);
        this.text = text;
    }

    private String text;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.TEXT;
    }
}
