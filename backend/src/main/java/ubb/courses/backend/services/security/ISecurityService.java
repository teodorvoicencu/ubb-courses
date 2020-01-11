package ubb.courses.backend.services.security;

import org.springframework.security.core.GrantedAuthority;
import ubb.courses.backend.security.UserPrincipal;

import java.util.Collection;
import java.util.Optional;

public interface ISecurityService {
    Optional<UserPrincipal> getCurrentUser();

    Collection<? extends GrantedAuthority> getAuthorities();

    boolean isTeacher();

    boolean isStudent();

    boolean isCourseOwner(int courseId);
}
