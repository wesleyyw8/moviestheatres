DROP DATABASE MOVIES_PROJECT;
CREATE DATABASE MOVIES_PROJECT;
USE MOVIES_PROJECT;

CREATE TABLE MOVIES (
  id int PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL
);

CREATE TABLE THEATRE (
  id int PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE SHOW_TIME (
  id INT PRIMARY KEY AUTO_INCREMENT,
  movie_id INT,
  theatre_id INT,
  time VARCHAR(50),
  FOREIGN KEY (movie_id) REFERENCES MOVIES(id),
  FOREIGN KEY (theatre_id) REFERENCES THEATRE(id)
);

INSERT INTO MOVIES (title) VALUES ("DON JUAN");
INSERT INTO MOVIES (title) VALUES ("PETER PAN");
INSERT INTO MOVIES (title) VALUES ("The Lost World");
INSERT INTO MOVIES (title) VALUES ("Wolfman");
INSERT INTO MOVIES (title) VALUES ("X Man");
INSERT INTO MOVIES (title) VALUES ("The Terminator");

INSERT INTO THEATRE (name) VALUES ("Plaza Cinema Cafe");
INSERT INTO THEATRE (name) VALUES ("AMC Universal Cineplex");
INSERT INTO THEATRE (name) VALUES ("Regal Winter Park");
INSERT INTO THEATRE (name) VALUES ("AMC Altamonte");
INSERT INTO THEATRE (name) VALUES ("Regal the Loop");


INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("3:00 PM",1,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("4:00 PM",1,2);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("10:00 AM",1,4);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("12:00 PM",1,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("7:00 PM",1,2);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("6:00 PM",2,3);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("2:00 PM",2,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("11:00 AM",3,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("2:00 PM",3,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("10:00 AM",3,2);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("5:00 PM",4,3);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("10:00 AM",5,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("1:00 PM",5,1);
INSERT INTO SHOW_TIME (time,movie_id, theatre_id) VALUES ("3:00 PM",5,1);



