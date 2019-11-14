package ubb.courses.backend.controllers.exceptions.user;

public class EmailException extends RuntimeException {
    public EmailException(String message) {
        super(message);
    }
}
