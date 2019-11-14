package ubb.courses.backend.controllers.exceptions.user;

public class UsernameException extends RuntimeException {
    public UsernameException(String message) {
        super(message);
    }
}
