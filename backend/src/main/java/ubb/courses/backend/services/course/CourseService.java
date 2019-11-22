package ubb.courses.backend.services.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ubb.courses.backend.repositories.CourseRepository;

@Service
public class CourseService implements ICourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
}
