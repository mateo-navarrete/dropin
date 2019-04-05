DROP DATABASE IF EXISTS dropin_data;
CREATE DATABASE dropin_data;

\c dropin_data;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  profile_photo TEXT,
  birthdate DATE
);

CREATE TABLE drops (
  id SERIAL PRIMARY KEY,
  type VARCHAR NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  drop_id INT REFERENCES drops(id),
  user_id INT REFERENCES users(id),
  longitude INT NOT NULL,
  latitude INT NOT NULL,
  zip INT,
  description TEXT NOT NULL,
  duration INT NOT NULL,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO drops (type) VALUES ('Music');
INSERT INTO drops (type) VALUES ('Sports');
INSERT INTO drops (type) VALUES ('Religious');
INSERT INTO drops (type) VALUES ('Gaming');
INSERT INTO drops (type) VALUES ('Education');
INSERT INTO drops (type) VALUES ('Entertainment');
INSERT INTO drops (type) VALUES ('Humanitarian');
INSERT INTO drops (type) VALUES ('Party');
INSERT INTO drops (type) VALUES ('Food');
INSERT INTO drops (type) VALUES ('Family');
