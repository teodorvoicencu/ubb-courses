package ubb.courses.backend.models.MediaTypes;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum MediaTypeEnum {
    TEXT(Values.TEXT),
    IMAGE(Values.IMAGE),
    VIDEO(Values.VIDEO),
    DOWNLOADABLE(Values.DOWNLOADABLE);

    private String value;

    public static class Values {
        public final static String TEXT = "text";
        public final static String IMAGE = "image";
        public final static String VIDEO = "video";
        public final static String DOWNLOADABLE = "downloadable";

    }
}
