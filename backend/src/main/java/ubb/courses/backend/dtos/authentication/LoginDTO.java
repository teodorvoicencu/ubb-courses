package ubb.courses.backend.dtos.authentication;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;
import ubb.courses.backend.dtos.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

/**
 * Maps the login payload to User class
 */
@Getter
public class LoginDTO extends DTO {

    @NotNull
    @Email
    private String email;

    @NotNull
    @Length(max = 16, min = 8)
    private String password;
}
