package ubb.courses.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ubb.courses.backend.controllers.responses.ApiResponse;
import ubb.courses.backend.controllers.responses.JwtAuthenticationResponse;
import ubb.courses.backend.dtos.IDTOConverter;
import ubb.courses.backend.dtos.authentication.LoginDTO;
import ubb.courses.backend.dtos.authentication.RegisterConverter;
import ubb.courses.backend.dtos.authentication.RegisterDTO;

import ubb.courses.backend.models.authorization.User;

import ubb.courses.backend.services.user.IUserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final IUserService userService;
    private final IDTOConverter<RegisterDTO, User> registerConverter;

    @Autowired
    public UserController(IUserService userService, RegisterConverter registerConverter) {
        this.userService = userService;
        this.registerConverter = registerConverter;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO loginDTO) {
        String jwt = userService.login(loginDTO.getEmail(), loginDTO.getPassword());
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterDTO registerDTO) {
        User user = registerConverter.createFrom(registerDTO);
        this.userService.register(user, registerDTO.getAuthority());

        return ResponseEntity.ok(new ApiResponse(true, "Successfully registered!"));
    }
}
