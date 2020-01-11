package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(MediaTypeEnum.Values.DOWNLOADABLE)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DownloadableMedia extends Media {

    @Builder
    public DownloadableMedia(Integer orderIndex, Course course, String downloadLink) {
        super(orderIndex, course);
        this.downloadLink = downloadLink;
    }

    public String downloadLink;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.DOWNLOADABLE;
    }
}
