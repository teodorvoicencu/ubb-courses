package ubb.courses.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

public interface CrudController<T> {

    @GetMapping("all")
    ResponseEntity<Set<T>> getAll();

    @GetMapping("{id}")
    ResponseEntity<T> getOne(@PathVariable Long id);

    @PostMapping
    ResponseEntity create(@RequestBody T dto);

    @PutMapping
    ResponseEntity update(@RequestBody T dto);

    @DeleteMapping("{id}")
    ResponseEntity delete(@PathVariable Long id);
}
