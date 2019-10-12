package ubb.courses.backend.models.authorization;

import lombok.Getter;
import lombok.Setter;
import ubb.courses.backend.models.generic.BaseEntity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "user_account", uniqueConstraints = @UniqueConstraint(columnNames = {"userName"}, name = "USER_UNIQUE_USERNAME"))
@Getter
@Setter
public class User extends BaseEntity {

    @Column
    private String name;

    @Column
    private String email;

    @Column(length = 16)
    private String username;

    @Column
    private String password;

    @Column(name = "account_expired")
    private Boolean accountExpired;

    @Column(name = "account_locked")
    private Boolean accountLocked;

    @Column(name = "credentials_expired")
    private Boolean credentialsExpired;

    @Column
    private Boolean enabled;

    @OneToMany(mappedBy = "user", targetEntity = UserAuthority.class, cascade = {
            CascadeType.ALL}, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<UserAuthority> userAuthorities = new HashSet<>();
}