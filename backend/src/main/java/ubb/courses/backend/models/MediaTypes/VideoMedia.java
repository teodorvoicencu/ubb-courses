package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("2")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VideoMedia extends Media {

    @Builder
    public VideoMedia(Integer orderIndex, Course course, String youtubeLink) {
        super(orderIndex, course);
        this.youtubeLink = youtubeLink;
    }


    private String youtubeLink;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.VIDEO;
    }
}
