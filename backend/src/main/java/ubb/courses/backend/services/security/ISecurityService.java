package ubb.courses.backend.services.security;

import org.springframework.security.core.GrantedAuthority;
import ubb.courses.backend.models.authorization.User;

import java.util.Collection;

public interface ISecurityService {
    Collection<? extends GrantedAuthority> getAuthorities();

    boolean isTeacher();
}
