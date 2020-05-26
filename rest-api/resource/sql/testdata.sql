USE ACL;

INSERT INTO users(first_name, last_name, password) VALUES ("Tony", "Stark", "password1");
INSERT INTO users(first_name, last_name, password) VALUES ("Thor", "Odinson", "password2");
INSERT INTO users(first_name, last_name, password) VALUES ("Bruce", "Banner", "password3");
INSERT INTO users(first_name, last_name, password) VALUES ("Steve", "Rogers", "password4");
INSERT INTO users(first_name, last_name, password) VALUES ("Natasha", "Romanoff", "password5");
INSERT INTO users(first_name, last_name, password) VALUES ("Wanda", "Maximoff", "password6");
INSERT INTO users(first_name, last_name, password) VALUES ("Clinton", "Barton", "password7");
INSERT INTO users(first_name, last_name, password) VALUES ("Carol", "Danvers", "password8");
INSERT INTO users(first_name, last_name, password) VALUES ("Nick", "Fury", "password9");
INSERT INTO users(first_name, last_name, password) VALUES ("Pepper", "Potts", "password10");

INSERT INTO adminList(id, role) VALUES (1 , "admin");


INSERT INTO groups1(group_name, group_info) VALUES("grp_1", "group 1");
INSERT INTO groups1(group_name, group_info) VALUES("grp_2", "group 2");
INSERT INTO groups1(group_name, group_info) VALUES("grp_3", "group 3");
INSERT INTO groups1(group_name, group_info) VALUES("grp_4", "group 4");
INSERT INTO groups1(group_name, group_info) VALUES("grp_5", "group 5");


INSERT INTO files(file_name, file_type, parent_id) VALUES("f1.txt", "folder", 0);
INSERT INTO files(file_name, file_type, parent_id) VALUES("f2.txt", "folder", 1);
INSERT INTO files(file_name, file_type, parent_id) VALUES("f3.txt", "file", 1);
INSERT INTO files(file_name, file_type, parent_id) VALUES("f4.txt", "file", 2);
INSERT INTO files(file_name, file_type, parent_id) VALUES("f5.txt", "file", 2);









