package ubb.courses.backend.models.authorization;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Enrollment;
import ubb.courses.backend.models.generic.BaseEntity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "user_account")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String password;

    @Column(name = "account_expired")
    private Boolean accountExpired = false;

    @Column(name = "account_locked")
    private Boolean accountLocked = false;

    @Column(name = "credentials_expired")
    private Boolean credentialsExpired = false;

    @Column
    private Boolean enabled = true;

    @OneToMany(mappedBy = "user", targetEntity = UserAuthority.class, cascade = {
            CascadeType.ALL}, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<UserAuthority> userAuthorities = new HashSet<>();

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private Set<Course> courses;

    @OneToMany(mappedBy = "user")
    private Set<Enrollment> enrollments;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}