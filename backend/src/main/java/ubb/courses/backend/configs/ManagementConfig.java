package ubb.courses.backend.configs;

import org.modelmapper.ModelMapper;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Global configurations for the project.
 */
@Configuration
@ComponentScan(basePackages = {
        "ubb.courses.backend.controllers", "ubb.courses.backend.services",
        "ubb.courses.backend.configs", "ubb.courses.backend.dtos", "ubb.courses.backend.security"
})
@EntityScan(basePackages = {"ubb.courses.backend.models"})
@EnableJpaRepositories(basePackages = {"ubb.courses.backend.repositories"})
public class ManagementConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}

