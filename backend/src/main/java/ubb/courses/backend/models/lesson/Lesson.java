package ubb.courses.backend.models.lesson;

import lombok.*;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.generic.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "lessons")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Lesson extends BaseEntity {

    @Column(name = "order_index")
    @NotNull
    private Integer orderIndex;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Column(name = "title")
    @NotNull
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "url")
    private String url;

    @Column(name = "media_type")
    @NotNull
    @Enumerated(EnumType.STRING)
    private LessonType type;

}
