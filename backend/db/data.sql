DROP DATABASE IF EXISTS dropin_data;
CREATE DATABASE dropin_data;

\c dropin_data;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_date	DATE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR NOT NULL
);

CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  blob VARCHAR
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  address VARCHAR,
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


INSERT INTO users (user_name, password_digest, email) VALUES ('pursuit', '$2a$10$9eZBe6FRcdBRlK8pv7lE2.ptT9XiqnUWxVJv.nZx61JNyBWzFrsri', 'pursuit@pursuit.org'), ('demo', '$2a$10$9eZBe6FRcdBRlK8pv7lE2.ptT9XiqnUWxVJv.nZx61JNyBWzFrsri', 'demo@demo.com');

INSERT INTO events (category_id, user_id, latitude, longitude, display_user, event_name, description)
VALUES ( 1, 1, 40.7622514, -73.92665079999999, 'true', 'My Family Event', 'Fun get together' ),
( 2, 1, 40.742431, -73.938770, 'true',  'My Party Event', 'So fun' ),
( 3, 2, 40.742431, -73.938770, 'true',  'My Sports Event', 'team squad battle drillz' ),
( 1, 1, 40.7622, -73.92665, 'true',  'Family Fun', 'for everyone' ),
( 2, 1, 40.763431, -73.9258770, 'true',  'party rockin', 'everyday we shufflin' ),
( 3, 2, 40.743431, -73.938770, 'true',  'racquetball', 'come play' ),
( 1, 1, 40.743431, -73.9258770, 'true',  'family bbq', 'byob' ),
( 2, 1, 40.751431, -73.928770, 'true',  'party everyday', 'rock n roll all night' ),
( 3, 2, 40.741431, -73.938870, 'true',  'smash tourney 2000', 'big money no hanzo mains' )
;

-- UPDATE events SET expiration_date = created_date + INTERVAL '15' MINUTE;

UPDATE events SET expiration_date = created_date + INTERVAL '2' HOUR;
