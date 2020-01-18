package ubb.courses.backend.models;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import ubb.courses.backend.models.authorization.User;
import ubb.courses.backend.models.generic.BaseEntity;
import ubb.courses.backend.models.lesson.Lesson;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.*;

@Builder
@Entity
@Table(name = "courses")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Course extends BaseEntity {

    @Column(name = "name", nullable = false)
    @NotNull
    @Size(min = 4, max = 32)
    private String name;

    @Column(name = "description", nullable = false)
    @NotNull
    private String description;

    @Column(name = "created_date", nullable = false, updatable = false)
    @CreatedDate
    private Date createdDate;

    @Column(name = "modified_date")
    @LastModifiedDate
    private Date modifiedDate;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @OneToMany(mappedBy = "course")
    private Set<Enrollment> students = new HashSet<>();

    @OneToMany(mappedBy = "course")
    @OrderBy("orderIndex asc")
    private List<Lesson> lessons = new ArrayList<>();
}
