USE ACL;

CREATE TABLE IF NOT EXISTS users (
    id                  INT         AUTO_INCREMENT      PRIMARY KEY,
    first_name          CHAR(25)    NOT NULL,
    last_name           CHAR(25)    NOT NULL,
    password            VARBINARY(128)    NOT NULL,
    creation_date       DATETIME    DEFAULT CURRENT_TIMESTAMP
)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS groups1 (
	id 	INT 	AUTO_INCREMENT PRIMARY KEY,
	group_name	CHAR(25),
	group_info	CHAR(50),
	group_creation_date		DATETIME 	DEFAULT CURRENT_TIMESTAMP
)ENGINE = INNODB CHARACTER SET=utf8;

# group-user table 
CREATE TABLE IF NOT EXISTS userGroup (
	id 	INT 	AUTO_INCREMENT UNIQUE KEY,
	user_id 	INT,
	group_id 	INT,
	PRIMARY KEY (user_id, group_id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (group_id) REFERENCES groups1(id)
)ENGINE = INNODB CHARACTER SET=utf8;


# files 
CREATE TABLE IF NOT EXISTS files (
	id		INT 	AUTO_INCREMENT 	PRIMARY KEY,
	file_name	CHAR(20),
	file_type 	CHAR(20),
	parent_id 	INT
)ENGINE = INNODB CHARACTER SET=utf8;

# admin/normal
CREATE TABLE IF NOT EXISTS adminList (
    id     INT 		PRIMARY KEY		NOT NULL,
    role        VARCHAR(20),
	FOREIGN KEY (id) REFERENCES users(id) 
)ENGINE = INNODB CHARACTER SET=utf8;

# permission table 
CREATE TABLE IF NOT EXISTS permission (
    permission_id   INT     PRIMARY KEY,
    permission_type CHAR(20)
)ENGINE = INNODB CHARACTER SET=utf8;

INSERT INTO permission VALUES(1, "read"); 
INSERT INTO permission VALUES(2, "write"); 


# user file permission
CREATE TABLE IF NOT EXISTS userFilePermission (
	id 	INT 	AUTO_INCREMENT UNIQUE KEY,
	user_id 	INT,
	file_id 	INT,
	permission_id 	INT,
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (permission_id) REFERENCES permission(permission_id)
)ENGINE = INNODB CHARACTER SET=utf8;


# group file permission
CREATE TABLE IF NOT EXISTS groupFilePermission (
	id 	INT 	AUTO_INCREMENT UNIQUE KEY,
	group_id 	INT,
	file_id 	INT,
	permission_id 	INT,
	FOREIGN KEY (group_id) REFERENCES groups1(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (permission_id) REFERENCES permission(permission_id)
);
