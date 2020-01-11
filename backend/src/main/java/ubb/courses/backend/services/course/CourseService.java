package ubb.courses.backend.services.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ubb.courses.backend.controllers.exceptions.course.CourseException;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.repositories.CourseRepository;
import ubb.courses.backend.repositories.UserRepository;
import ubb.courses.backend.services.security.ISecurityService;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
public class CourseService implements ICourseService {

    private final CourseRepository courseRepository;
    private final UserRepository userRepository;
    private final ISecurityService securityService;

    @Autowired
    public CourseService(CourseRepository courseRepository, UserRepository userRepository, ISecurityService securityService) {
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
        this.securityService = securityService;
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
    public Course addCourse(Course course) {
        this.userRepository.findById(this.securityService.getUserId()).ifPresent(course::setOwner);
        return this.courseRepository.save(course);
    }

    @Override
    @Transactional
    public void deleteCourse(Integer id) {
        if (this.courseRepository.existsById(id)) {
            this.courseRepository.deleteById(id);
        } else {
            throw new CourseException("Course not found!");
        }
    }

    @Override
    @Transactional
    public Course updateCourse(Course course) {
        if (!courseRepository.existsById(course.getId())) {
            throw new CourseException("Course not found!");
        }

        Course existingCourse = courseRepository.getOne(course.getId());
        course.setOwner(existingCourse.getOwner());

        return this.courseRepository.save(course);
    }
}
