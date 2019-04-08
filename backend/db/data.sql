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

CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  drop_id INT REFERENCES drops(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  dropper_visibile VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  description TEXT NOT NULL,
  ending TIMESTAMP
);

INSERT INTO drops (type)
VALUES ('Education'),
('Entertainment'),
('Family'),
('Food'),
('Gaming'),
('Humanitarian'),
('Music'),
('Party'),
('Religious'),
('Sports');


INSERT INTO users (username, password_digest, profile_photo, birthdate) VALUES ('JRJMuzik', '12345678', '', '1990-01-01'),
('GoodSamaritan123', '12345678', '', '1980-01-01'),
('BallIsLife', '12345678', '', '1989-01-01'),
('user1', '12345678', '', '1988-01-01');

INSERT INTO pins (drop_id, user_id, latitude, longitude, dropper_visibile, name, description)
VALUES ( 1, 1, 40.743431, -73.938770, 'true',  'pin name 1', 'pin description 1' ),
( 2, 2, 40.743431, -73.938770, 'true',  'pin name 2', 'pin description 2' ),
( 3, 3, 40.743431, -73.938780, 'true',  'pin name 3', 'pin description 3' ),
( 4, 1, 40.743431, -73.938790, 'true',  'pin name 4', 'pin description 4' ),
( 5, 2, 40.743441, -73.938770, 'true',  'pin name 5', 'pin description 5' ),
( 6, 3, 40.743451, -73.938770, 'true',  'pin name 6', 'pin description 6' ),
( 7, 1, 40.743461, -73.938770, 'true',  'pin name 7', 'pin description 7' ),
( 8, 2, 40.743471, -73.938770, 'true',  'pin name 8', 'pin description 8' ),
( 9, 3, 40.743481, -73.938770, 'true',  'pin name 9', 'pin description 9' ),
( 10, 1, 40.743491, -73.938770, 'true',  'pin name 10', 'pin description 10' );

UPDATE pins SET ending = timestamp + INTERVAL '3' HOUR;
