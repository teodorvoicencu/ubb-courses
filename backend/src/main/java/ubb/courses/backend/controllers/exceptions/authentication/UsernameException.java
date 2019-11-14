package ubb.courses.backend.controllers.exceptions.authentication;

public class UsernameException extends RuntimeException {
    public UsernameException(String message) {
        super(message);
    }
}
