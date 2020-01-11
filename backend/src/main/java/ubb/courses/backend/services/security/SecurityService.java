package ubb.courses.backend.services.security;

import lombok.val;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ubb.courses.backend.models.authorization.AuthorityType;
import ubb.courses.backend.security.UserPrincipal;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class SecurityService implements ISecurityService {

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserPrincipal) {
            return ((UserPrincipal) principal).getAuthorities();
        }
        return new ArrayList<>();
    }

    @Override
    public Integer getUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserPrincipal) {
            return ((UserPrincipal) principal).getId();
        }
        return null;
    }


    @Override
    public boolean isTeacher() {
        val authorities = this.getAuthorities();
        return authorities.stream().filter(
                authority -> authority.getAuthority().equals(AuthorityType.TEACHER.name())
        ).count() == 1;
    }

    @Override
    public boolean isStudent() {
        val authorities = this.getAuthorities();
        return authorities.stream().filter(
                authority -> authority.getAuthority().equals(AuthorityType.STUDENT.name())
        ).count() == 1;
    }
}
