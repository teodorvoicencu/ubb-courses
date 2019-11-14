create table user_account
(
    ID                  serial primary key,
    name                varchar,
    email               varchar unique,
    username            varchar(16) unique,
    password            varchar(255),
    account_expired     boolean,
    account_locked      boolean,
    credentials_expired boolean,
    enabled             boolean
)
