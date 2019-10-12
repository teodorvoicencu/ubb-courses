package ubb.courses.backend.models.authorization;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "authority",
        uniqueConstraints = @UniqueConstraint(columnNames = {"name"}, name = "AUTHORITY_UNIQUE_NAME"))
@Getter
@Setter
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column
    @Enumerated(EnumType.STRING)
    private AuthorityType name;

}
