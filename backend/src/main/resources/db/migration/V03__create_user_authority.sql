create table user_authority
(
    ID serial primary key,
    USER_ID int references user_account(ID),
    AUTHORITY_ID int references authority(ID)
)