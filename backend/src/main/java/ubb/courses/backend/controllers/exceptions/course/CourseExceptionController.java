package ubb.courses.backend.controllers.exceptions.course;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ubb.courses.backend.controllers.responses.ApiResponse;

@ControllerAdvice
public class CourseExceptionController {
    @ExceptionHandler(value = CourseException.class)
    public ResponseEntity<Object> usernameException(CourseException exception) {
        return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.NOT_FOUND);
    }
}
