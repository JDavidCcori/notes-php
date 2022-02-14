DROP SCHEMA IF EXISTS tasks;
CREATE SCHEMA tasks;
USE tasks;

--Table structure for table `users`
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  day_of_birth DATE ,
  profile_img VARCHAR(255) ,
  biography varchar(255) ,
  PRIMARY KEY (user_id)
);

create table followers(
  follow_id int not null auto_increment primary key,
  sender_id int,
  receptor_id int,
  created_at datetime,
  foreign key (sender_id) references users(user_id),
  foreign key (receptor_id) references users(user_id)
);

--Table structure for table `pendents`
CREATE TABLE tasks (
  task_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL ,
  created_at DATE  ,
  deadline DATE ,
  priority VARCHAR(10),
  user_id int ,
  likes INT,
  is_public BOOLEAN  DEFAULT FALSE,
  $task_state BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (task_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);
/* UPDATE tabla SET automoviles = automoviles + 1
WHERE id = 1  notasldb*/

create table comment(
  comment_id int not null auto_increment primary key,
  user_id int,
  task_id int,
  content text not null,
  created_at datetime,
  foreign key (user_id) references users(user_id),
  foreign key (task_id) references tasks(task_id)
);


create table recover (
  recover_id int not null auto_increment primary key,
  user_id int,
  code varchar(20),
  is_used boolean default 0,
  created_at datetime,
  foreign key(user_id) references users(user_id)
);