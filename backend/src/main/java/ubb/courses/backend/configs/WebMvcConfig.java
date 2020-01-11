package ubb.courses.backend.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.MappedInterceptor;
import ubb.courses.backend.security.AuthorityInterceptor;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    private final AuthorityInterceptor authorityInterceptor;

    @Autowired
    public WebMvcConfig(AuthorityInterceptor authorityInterceptor) {
        this.authorityInterceptor = authorityInterceptor;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        int MAX_AGE_SECS = 3600;
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
                .allowCredentials(true)
                .maxAge(MAX_AGE_SECS);
    }

    @Bean
    public MappedInterceptor roleInterceptor() {
        return new MappedInterceptor(new String[] { "/**" }, authorityInterceptor);
    }
}