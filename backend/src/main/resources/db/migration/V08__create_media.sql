create table media(
    ID serial primary key,
    course_id integer references courses(ID),
    order_index integer,
    text varchar(1025),
    download_link varchar(1025),
    youtube_link varchar(1025),
    image_link varchar(1025),
    media_type varchar(31)
)