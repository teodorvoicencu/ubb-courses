package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("1")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ImageMedia extends Media {

    @Builder
    public ImageMedia(Course course, String imageLink) {
        super(course);
        this.imageLink = imageLink;
    }

    public String imageLink;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.IMAGE;
    }
}
