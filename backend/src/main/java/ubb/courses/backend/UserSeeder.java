package ubb.courses.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ubb.courses.backend.models.authorization.User;
import ubb.courses.backend.repositories.UserRepository;

@Component
public class UserSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
//        User user = new User();
//        user.setUsername("admin");
//        user.setPassword("admin123");
//        user.setEnabled(true);
//        userRepository.save(user);
    }
}
