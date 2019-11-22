create table courses
(
    ID            serial primary key,
    name          varchar(255) not null,
    description   text         not null,
    created_date  timestamp    not null,
    modified_date timestamp
)