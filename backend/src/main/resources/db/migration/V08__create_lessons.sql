create table lessons(
    ID serial primary key,
    course_id integer references courses(ID),
    order_index integer,
    title varchar(255),
    content text,
    url text,
    media_type varchar(31)
)