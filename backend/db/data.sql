DROP DATABASE IF EXISTS dropin_data;
CREATE DATABASE dropin_data;

\c dropin_data;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  birth_date DATE,
  profile_photo TEXT,
  instagram_id VARCHAR,
  linkedin_id VARCHAR,
  last_login_date	DATE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  display_user VARCHAR NOT NULL,
  event_name VARCHAR NOT NULL,
  description TEXT NOT NULL,
  expiration_date TIMESTAMP
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  session_key VARCHAR NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiration_date TIMESTAMP
);

CREATE TABLE reports (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  event_id INT REFERENCES events(id) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  description TEXT NOT NULL
);

INSERT INTO categories (category)
VALUES ('Family'),
('Party'),
('Sports');


INSERT INTO users (user_name, password_digest, birth_date) VALUES ('JRJMuzik', '12345678', '1990-01-01'),
('GoodSamaritan123', '12345678', '1980-01-01'),
('BallIsLife', '12345678', '1989-01-01'),
('user1', '12345678', '1988-01-01');

INSERT INTO events (category_id, user_id, latitude, longitude, display_user, event_name, description)
VALUES ( 1, 1, 40.743431, -73.938770, 'true',  'event name 1', 'event description 1' ),
( 2, 2, 40.742431, -73.938770, 'true',  'event name 2', 'event description 2' ),
( 3, 3, 40.742431, -73.938770, 'true',  'event name 3', 'event description 3' ),
( 1, 1, 40.742431, -73.938770, 'true',  'event name 4', 'event description 4' ),
( 2, 2, 40.743431, -73.938770, 'true',  'event name 5', 'event description 5' ),
( 3, 3, 40.743431, -73.938770, 'true',  'event name 6', 'event description 6' ),
( 1, 1, 40.743431, -73.938770, 'true',  'event name 7', 'event description 7' ),
( 2, 2, 40.741431, -73.938770, 'true',  'event name 8', 'event description 8' ),
( 3, 3, 40.741431, -73.938770, 'true',  'event name 9', 'event description 9' ),
( 1, 1, 40.741431, -73.938770, 'true',  'event name 10', 'event description 10' ),
( 2, 1, 40.745471, -73.939780, 'true',  'event name 11', 'event description 11' ),
( 3, 2, 40.745471, -73.938790, 'true',  'event name 12', 'event description 12' ),
( 1, 3, 40.746471, -73.938760, 'true',  'event name 13', 'event description 13' ),
( 2, 1, 40.746471, -73.938750, 'true',  'event name 14', 'event description 14' ),
( 3, 2, 40.746471, -73.938740, 'true',  'event name 15', 'event description 15' ),
( 1, 3, 40.745471, -73.931730, 'true',  'event name 16', 'event description 16' ),
( 2, 1, 40.745471, -73.931720, 'true',  'event name 17', 'event description 17' ),
( 3, 2, 40.745471, -73.932710, 'true',  'event name 18', 'event description 18' ),
( 1, 3, 40.745471, -73.933770, 'true',  'event name 19', 'event description 19' ),
( 2, 1, 40.745471, -73.938770, 'true',  'event name 20', 'event description 20' ),
( 3, 2, 40.745451, -73.938790, 'true',  'event name 21', 'event description 21' ),
( 1, 3, 40.745451, -73.931780, 'true',  'event name 22', 'event description 22' ),
( 2, 1, 40.745451, -73.932710, 'true',  'event name 23', 'event description 23' ),
( 3, 2, 40.745451, -73.933720, 'true',  'event name 24', 'event description 24' ),
( 1, 3, 40.745451, -73.934730, 'true',  'event name 25', 'event description 25' ),
( 2, 1, 40.745451, -73.935740, 'true',  'event name 26', 'event description 26' ),
( 3, 2, 40.745451, -73.936750, 'true',  'event name 27', 'event description 27' ),
( 1, 3, 40.745451, -73.937760, 'true',  'event name 28', 'event description 28' ),
( 2, 1, 40.740451, -73.938770, 'true',  'event name 29', 'event description 29' ),
( 3, 2, 40.745451, -73.939780, 'true',  'event name 30', 'event description 30' );

UPDATE events SET expiration_date = created_date + INTERVAL '3' HOUR;
