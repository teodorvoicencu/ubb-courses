create table enrollments
(
    ID            serial primary key,
    course_id     int       not null,
    user_id       int       not null,
    foreign key (course_id) references courses (id),
    foreign key (user_id) references user_account (id)
);