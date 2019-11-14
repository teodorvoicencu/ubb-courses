package ubb.courses.backend.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ubb.courses.backend.controllers.exceptions.AppException;
import ubb.courses.backend.controllers.exceptions.authentication.EmailException;
import ubb.courses.backend.controllers.exceptions.authentication.UsernameException;
import ubb.courses.backend.dtos.authentication.RegisterConverter;
import ubb.courses.backend.models.authorization.Authority;
import ubb.courses.backend.models.authorization.AuthorityType;
import ubb.courses.backend.models.authorization.User;
import ubb.courses.backend.models.authorization.UserAuthority;
import ubb.courses.backend.repositories.AuthorityRepository;
import ubb.courses.backend.repositories.UserRepository;
import ubb.courses.backend.security.JwtTokenProvider;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserService implements IUserService {

    private final UserRepository userRepository;

    private final AuthorityRepository authorityRepository;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider tokenProvider;

    public UserService(UserRepository userRepository, AuthorityRepository authorityRepository,
                       AuthenticationManager authenticationManager, RegisterConverter registerConverter,
                       JwtTokenProvider tokenProvider) {
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }


    @Override
    public String login(String email, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        password
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return tokenProvider.generateToken(authentication);
    }

    @Override
    public void register(User user, AuthorityType authority) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new UsernameException("Username is already taken!");
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailException("Email address already in use!");
        }

        Authority userAuthority = authorityRepository.findByName(authority)
                .orElseThrow(() -> new AppException("User authority not found."));

        user.getUserAuthorities().add(new UserAuthority(user, userAuthority));

        userRepository.save(user);
    }
}
