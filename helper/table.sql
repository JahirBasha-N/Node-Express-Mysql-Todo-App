create database node_todo_app;

use node_todo_app;

create table todo_app (
	todo_id bigint auto_increment primary key,
	description varchar(255)
);