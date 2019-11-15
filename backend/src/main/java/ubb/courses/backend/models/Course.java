package ubb.courses.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "courses")
@EntityListeners(AuditingEntityListener.class)
public class Course extends BaseEntity<Long> implements Serializable {
    @NotBlank
    private String title;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @OneToMany(mappedBy = "course_id")
    private Set<Lesson> lessons;
}
