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
  longitude FLOAT NOT NULL,
  latitude FLOAT NOT NULL,
  zip INT,
  description TEXT NOT NULL,
  duration INT NOT NULL,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO drops (type) VALUES ('Music'), ('Sports'), ('Religious'),('Gaming'), ('Education'), ('Entertainment'), ('Humanitarian'), ('Party'), ('Food'), ('Family');
INSERT INTO users (username, password_digest, profile_photo, birthdate) VALUES ('JRJMuzik', '12345678', '', '1990-01-01'), ('GoodSamaritan123', '12345678', '', '1980-01-01'), ('BallIsLife', '12345678', '', '1989-01-01'), ('user1', '12345678', '', '1988-01-01');
INSERT INTO events (drop_id, user_id, longitude, latitude, zip, description, duration) VALUES ((SELECT id FROM drops WHERE id='2'), (SELECT id FROM users WHERE id='1'), -73.938770, 40.743431, 11101, 'Sample Description2', 15 ), ((SELECT id FROM drops WHERE id='3'), (SELECT id FROM users WHERE id='2'), -73.941538, 40.742878, 11101, 'Sample Description21', 30 ), ((SELECT id FROM drops WHERE id='4'), (SELECT id FROM users WHERE id='3'), -73.938770, 40.743431, 11101, 'Sample Description2', 15 ), ((SELECT id FROM drops WHERE id='5'), (SELECT id FROM users WHERE id='1'), -73.942879, 40.743203, 11101, 'Sample Description2', 15);
