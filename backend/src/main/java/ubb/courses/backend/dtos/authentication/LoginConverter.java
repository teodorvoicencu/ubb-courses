package ubb.courses.backend.dtos.authentication;

import org.springframework.stereotype.Component;
import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.models.authorization.User;

@Component
public class LoginConverter implements IDTOConverter<LoginDTO, User> {

    @Override
    public LoginDTO createFrom(User entity) {
        return null;
    }

    @Override
    public User createFrom(LoginDTO dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        return user;
    }
}
