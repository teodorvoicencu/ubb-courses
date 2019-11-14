create table authority
(
    ID   serial primary key,
    name varchar(32) unique
);

insert into authority(name)
values ('ADMIN'),
       ('TEACHER'),
       ('STUDENT');