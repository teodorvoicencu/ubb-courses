package ubb.courses.backend.services.security;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public interface ISecurityService {
    Collection<? extends GrantedAuthority> getAuthorities();

    Integer getUserId();

    boolean isTeacher();

    boolean isStudent();

    boolean isCourseOwner(int courseId);
}
