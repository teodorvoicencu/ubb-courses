package ubb.courses.backend.services.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import ubb.courses.backend.controllers.exceptions.course.CourseException;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.repositories.CourseRepository;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@EnableTransactionManagement
public class CourseService implements ICourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Collection<Course> getAllCourses() {
        return this.courseRepository.findAll();
    }

    @Override
    public Course getCourseById(Integer id) {
        return this.courseRepository.findById(id).orElseThrow(() -> new CourseException("Course not found!"));
    }

    @Override
    @Transactional
    public void addCourse(Course c){this.courseRepository.save(c);}
}
