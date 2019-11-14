package ubb.courses.backend.controllers.exceptions.authentication;

public class EmailException extends RuntimeException {
    public EmailException(String message) {
        super(message);
    }
}
