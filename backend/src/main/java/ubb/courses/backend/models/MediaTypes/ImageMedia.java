package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(MediaTypeEnum.Values.IMAGE)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ImageMedia extends Media {

    @Builder
    public ImageMedia(Integer orderIndex, Course course, String imageLink) {
        super(orderIndex, course);
        this.imageLink = imageLink;
    }

    public String imageLink;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.IMAGE;
    }
}
