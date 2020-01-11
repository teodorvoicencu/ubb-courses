alter table courses add column owner_id int;
alter table courses add foreign key (owner_id) references user_account(id);