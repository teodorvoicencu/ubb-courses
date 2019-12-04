package ubb.courses.backend.controllers.exceptions.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ubb.courses.backend.controllers.responses.ApiResponse;

@ControllerAdvice
public class UserExceptionController {
    @ExceptionHandler(value = EmailException.class)
    public ResponseEntity<Object> emailException(EmailException exception) {
        return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.BAD_REQUEST);
    }
}
