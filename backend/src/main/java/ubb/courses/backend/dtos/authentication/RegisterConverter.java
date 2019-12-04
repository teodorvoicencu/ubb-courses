package ubb.courses.backend.dtos.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.models.authorization.User;

@Component
public class RegisterConverter implements IDTOConverter<RegisterDTO, User> {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public RegisterConverter(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public RegisterDTO createFrom(User entity) {
        return null;
    }

    @Override
    public User createFrom(RegisterDTO dto) {
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        return user;
    }
}
