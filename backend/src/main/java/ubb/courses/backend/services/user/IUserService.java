package ubb.courses.backend.services.user;

import ubb.courses.backend.models.authorization.AuthorityType;
import ubb.courses.backend.models.authorization.User;

public interface IUserService {
    String login(String email, String password);

    void register(User user, AuthorityType authority);
}
