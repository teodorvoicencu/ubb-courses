package ubb.courses.backend.models.MediaTypes;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Media;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("3")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DownloadableMedia extends Media {

    @Builder
    public DownloadableMedia(Course course, String downloadLink) {
        super(course);
        this.downloadLink = downloadLink;
    }

    public String downloadLink;

    @Override
    public MediaTypeEnum getType() {
        return MediaTypeEnum.DOWNLOADABLE;
    }
}
