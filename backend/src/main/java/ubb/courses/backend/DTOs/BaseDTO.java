package ubb.courses.backend.DTOs;

import java.util.Objects;

public abstract class BaseDTO<T, ID> implements ModelDTO<T> {
    private ID id;

    public BaseDTO() {
    }

    public BaseDTO(ID id) {
        this.id = id;
    }

    public ID getId() {
        return id;
    }

    public void setId(ID id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BaseDTO that = (BaseDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

