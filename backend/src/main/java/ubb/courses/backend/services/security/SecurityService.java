package ubb.courses.backend.services.security;

import lombok.val;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.authorization.AuthorityType;
import ubb.courses.backend.models.authorization.User;
import ubb.courses.backend.models.generic.BaseEntity;
import ubb.courses.backend.repositories.UserRepository;
import ubb.courses.backend.security.UserPrincipal;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SecurityService implements ISecurityService {

    private final UserRepository userRepository;
    private final Logger logger = LoggerFactory.getLogger(SecurityService.class);

    public SecurityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<UserPrincipal> getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserPrincipal) {
            return Optional.of((UserPrincipal) principal);
        }

        return Optional.empty();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Optional<UserPrincipal> optionalUser = getCurrentUser();

        if (optionalUser.isEmpty()) {
            /* Return an empty immutable list. */
            return Collections.emptyList();
        }

        return optionalUser.get().getAuthorities();
    }

    @Override
    public boolean isTeacher() {
        return this.getAuthorities()
                .stream()
                .anyMatch(authority -> authority.getAuthority().equals(AuthorityType.TEACHER.name()));
    }

    @Override
    public boolean isStudent() {
        return this.getAuthorities()
                .stream()
                .anyMatch(authority -> authority.getAuthority().equals(AuthorityType.STUDENT.name()));
    }

    @Override
    public boolean isCourseOwner(int courseId) {
        /* Pre-emptive return if the user is not a teacher. */
        if (!isTeacher()) {
            return false;
        }

        val optUser = getCurrentUser();
        if (optUser.isEmpty()) {
            return false;
        }

        UserPrincipal userPrincipal = optUser.get();
        int userId = userPrincipal.getId();

        User user = userRepository.getOne(userId);
        logger.info("isCourseOwner: user '{}' with for userId={} knocks at the door.", user.getName(), userId);

        Set<Course> courses = user.getCourses();

        logger.info(
                "isCourseOwner: {}'s set of courses is {}.",
                user.getName(),
                courses.stream().map(BaseEntity::getId).collect(Collectors.toList())
        );

        return courses.stream().anyMatch(c -> c.getId() == courseId);
    }
}
