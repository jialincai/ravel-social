CREATE EXTENSION IF NOT EXISTS citext;
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE friendships (
  user_a UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_b UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),

  PRIMARY KEY (user_a, user_b),
  CONSTRAINT no_self_friendship CHECK (user_a <> user_b),
  CONSTRAINT user_order CHECK (user_a < user_b)
);

CREATE TABLE inputs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  raw_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  extracted_at TIMESTAMPTZ,
  processed BOOLEAN DEFAULT FALSE
);

CREATE TABLE tags (
  id UUID PRIMARY KEY,
  name CITEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE inputs_to_tags (
  input_id UUID REFERENCES inputs(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (input_id, tag_id)
);

CREATE TABLE apps (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE users_to_apps (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  app_id UUID REFERENCES apps(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, app_id)
);

CREATE TABLE timeslots (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  app_id UUID REFERENCES apps(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ NOT NULL,
  ended_at TIMESTAMPTZ NOT NULL,
  location GEOGRAPHY(Point, 4326)
  CHECK (started_at < ended_at)
);

CREATE TABLE suggestions (
  id UUID PRIMARY KEY,
  raw_text TEXT NOT NULL,
  scheduled_time TIMESTAMPTZ,
  location GEOGRAPHY(Point, 4326),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE suggestions_to_tags (
  suggestion_id UUID REFERENCES suggestions(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (suggestion_id, tag_id)
);

CREATE TABLE suggestions_to_users (
  suggestion_id UUID REFERENCES suggestions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  feedback TEXT CHECK (feedback IN ('like', 'dislike')),
  PRIMARY KEY (suggestion_id, user_id)
);

CREATE TABLE events (
  id UUID PRIMARY KEY,
  suggestion_id UUID NOT NULL REFERENCES suggestions(id) ON DELETE CASCADE,
  scheduled_time TIMESTAMPTZ NOT NULL,
  location GEOGRAPHY(Point, 4326) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE events_to_users (
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('accepted', 'declined', 'tentative')),
  responded_at TIMESTAMPTZ,
  PRIMARY KEY (event_id, user_id)
);

-- Consider adding in the future
-- CREATE TABLE locations (
--   id UUID PRIMARY KEY,
--   address TEXT,                  -- "11 W 53rd St, New York, NY 10019"
--   lat DOUBLE PRECISION NOT NULL,
--   lng DOUBLE PRECISION NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT now()
-- );
