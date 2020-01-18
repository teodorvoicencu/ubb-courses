package ubb.courses.backend.models;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import ubb.courses.backend.models.generic.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "lessons")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Lesson extends BaseEntity {

    @Column(name = "created_date", nullable = false, updatable = false)
    @CreatedDate
    private Date createdDate;

    @Column(name = "modified_date")
    @LastModifiedDate
    private Date modifiedDate;

    @Column(name = "subject", nullable = false)
    @NotNull
    @Size(min = 4, max = 32)
    private String subject;

    @Column(name = "description", nullable = false)
    private String description;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "course_id")
    @NotNull
    private Course course;
}
