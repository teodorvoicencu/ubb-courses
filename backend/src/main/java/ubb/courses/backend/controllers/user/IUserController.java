package ubb.courses.backend.controllers.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import ubb.courses.backend.dtos.authentication.LoginDTO;
import ubb.courses.backend.dtos.authentication.RegisterDTO;

import javax.validation.Valid;

public interface IUserController {

    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO loginDTO);

    public ResponseEntity<?> register(@Valid @RequestBody RegisterDTO registerDTO);
}
