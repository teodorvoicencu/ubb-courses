create table lessons
(
    ID            serial primary key,
    created_date  timestamp not null,
    modified_date timestamp,
    subject       text      not null,
    description   text      not null,
    course_id     int       not null,
    foreign key (course_id) references courses (id)
);