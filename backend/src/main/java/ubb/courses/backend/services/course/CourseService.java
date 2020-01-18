package ubb.courses.backend.services.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ubb.courses.backend.controllers.exceptions.course.CourseException;
import ubb.courses.backend.models.Course;
import ubb.courses.backend.models.Enrollment;
import ubb.courses.backend.models.authorization.User;
import ubb.courses.backend.repositories.CourseRepository;
import ubb.courses.backend.repositories.EnrollmentRepository;
import ubb.courses.backend.repositories.UserRepository;
import ubb.courses.backend.services.security.ISecurityService;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
public class CourseService implements ICourseService {

    private final CourseRepository courseRepository;
    private final UserRepository userRepository;
    private final ISecurityService securityService;
    private final EnrollmentRepository enrollmentRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository, UserRepository userRepository, ISecurityService securityService, EnrollmentRepository enrollmentRepository) {
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
        this.securityService = securityService;
        this.enrollmentRepository = enrollmentRepository;
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
    public Course addCourse(Course course) throws CourseException {
        int ownerId = securityService.getCurrentUser()
                .orElseThrow(() -> new CourseException("Trying to get current user returned Optional.empty()."))
                .getId();

        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new CourseException(String.format("Failed to find user with id=%d.", ownerId)));

        course.setOwner(owner);
        return courseRepository.save(course);
    }

    @Override
    @Transactional
    public void deleteCourse(Integer id) {
        if (this.courseRepository.existsById(id)) {
            this.enrollmentRepository.deleteAllByCourseId(id);
            this.courseRepository.deleteById(id);
        } else {
            throw new CourseException(("Course not found!"));
        }
    }

    @Override
    @Transactional
    public Course updateCourse(Course course) {
        User owner = courseRepository
                .findById(course.getId())
                .orElseThrow(() -> new CourseException("Course cannot be not found."))
                .getOwner();

        course.setOwner(owner);
        return courseRepository.save(course);
    }

    @Override
    @Transactional
    public Course enrollStudent(Integer courseId) {
        if (!this.courseRepository.existsById(courseId)) {
            throw new CourseException("Course not found!");
        }

        Course course = courseRepository.findById(courseId).orElseThrow(() -> new CourseException("Course not found!"));

        int userId = securityService.getCurrentUser()
                .orElseThrow(() -> new CourseException("Trying to get current user returned Optional.empty()."))
                .getId();

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CourseException(String.format("Failed to find user with id=%d.", userId)));

        if (course.getOwner().getId() == userId) {
            throw new CourseException("You are the owner of the course!" +
                    " You cannot enlist to your own course! Who would teach it? :P");
        }

        if (enrollmentRepository.findByCourseIdInAndUserId(courseId, userId) != null) {
            throw new CourseException(String.format("User already enrolled in course with id=%d.", userId));
        }

        this.enrollmentRepository.save(new Enrollment(course, user));

        return course;
    }
}
