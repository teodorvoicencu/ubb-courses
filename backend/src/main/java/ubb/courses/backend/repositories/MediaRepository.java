package ubb.courses.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ubb.courses.backend.models.Media;

import java.util.List;

public interface MediaRepository extends JpaRepository<Media, Integer> {
    List<Media> findMediaByCourse_Id(Integer courseId);
}
