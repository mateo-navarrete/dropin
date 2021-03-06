-- DROP DATABASE IF EXISTS dropin_data;
-- CREATE DATABASE dropin_data;
--
-- \c dropin_data;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_date	DATE
);

-- CREATE TABLE categories (
--   id SERIAL PRIMARY KEY,
--   category VARCHAR NOT NULL
-- );

CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  blob VARCHAR
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  -- category_id INT REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  address VARCHAR,
  display_user VARCHAR NOT NULL,
  event_name VARCHAR NOT NULL,
  caption TEXT NOT NULL,
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

-- INSERT INTO categories (category)
-- VALUES ('Family'),
-- ('Party'),
-- ('Sports');


INSERT INTO users (user_name, password_digest, email) VALUES ('pursuit', '$2a$10$9eZBe6FRcdBRlK8pv7lE2.ptT9XiqnUWxVJv.nZx61JNyBWzFrsri', 'pursuit@pursuit.org'), ('demo', '$2a$10$9eZBe6FRcdBRlK8pv7lE2.ptT9XiqnUWxVJv.nZx61JNyBWzFrsri', 'demo@demo.com');

INSERT INTO events (user_id, latitude, longitude, display_user, event_name, caption)
VALUES
( 1, 40.755948, -73.923612, 'true',  'MOMI', 'Demo Day' ),
( 1, 40.756701, -73.925451, 'true',  'west', 'of Demo Day' ),
( 1, 40.756801, -73.921500, 'true',  'east', 'of Demo Day' ),
( 1, 40.758026, -73.923804, 'true',  'north', 'of Demo Day' ),
( 1, 40.757140, -73.929588, 'true',  'far west', 'of Demo Day'),
( 1, 40.757140, -73.917500, 'true',  'far east', 'of Demo Day'),
( 1, 40.754010, -73.925440, 'true',  'southwest', 'of Demo Day' ),
( 1, 40.754010, -73.920000, 'true',  'southeast', 'of Demo Day' );

-- 40 N|S & 73 W|E
-- ( 1, 40.742431, -73.938770, 'true',  'My Party Event', 'So fun' );
-- ( 2, 40.742431, -73.938770, 'true',  'My Sports Event', 'team squad battle drillz' ),
-- ( 1, 40.7622, -73.92665, 'true',  'Family Fun', 'for everyone' ),
-- ( 1, 40.763431, -73.9258770, 'true',  'party rockin', 'everyday we shufflin' ),
-- ( 2, 40.743431, -73.938770, 'true',  'racquetball', 'come play' ),
-- ( 1, 40.743431, -73.9258770, 'true',  'family bbq', 'byob' ),
-- ( 1, 40.751431, -73.928770, 'true',  'party everyday', 'rock n roll all night' ),
-- ( 2, 40.741431, -73.938870, 'true',  'smash tourney 2000', 'big money no hanzo mains' )
-- ;


-- UPDATE events SET expiration_date = created_date + INTERVAL '15' MINUTE;

UPDATE events SET expiration_date = created_date + INTERVAL '2' HOUR;
