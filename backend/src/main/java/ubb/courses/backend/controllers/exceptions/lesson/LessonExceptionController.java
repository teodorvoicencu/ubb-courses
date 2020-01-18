package ubb.courses.backend.controllers.exceptions.lesson;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ubb.courses.backend.controllers.responses.ApiResponse;

@ControllerAdvice
public class LessonExceptionController {
    @ExceptionHandler(value = LessonException.class)
    public ResponseEntity<Object> usernameException(LessonException exception) {
        return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.NOT_FOUND);
    }
}
