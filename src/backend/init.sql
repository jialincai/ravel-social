CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL
);

CREATE TABLE friendships (
  user_a UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_b UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),

  PRIMARY KEY (user_a, user_b),
  CONSTRAINT no_self_friendship CHECK (user_a <> user_b),
  CONSTRAINT user_order CHECK (user_a < user_b)
);

CREATE TABLE tags (
  id UUID PRIMARY KEY, -- UUIDv7 generated app-side
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
  CHECK (name = LOWER(name))
);

CREATE TABLE activities (
  id UUID PRIMARY KEY, -- UUIDv7 generated app-side
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE photos (
  id UUID PRIMARY KEY, -- UUIDv7 generated app-side
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  uri TEXT NOT NULL, -- Mock with LAN IP (e.g. 192.168.x.x/photos/abc.jpg)
  timestamp TIMESTAMPTZ NOT NULL,
  location GEOGRAPHY(Point, 4326) NOT NULL,

  CONSTRAINT photo_per_hour_per_user UNIQUE (user_id, timestamp)
);

CREATE TABLE photos_to_tags (
  photo_id UUID NOT NULL REFERENCES photos(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (photo_id, tag_id)
);

CREATE TABLE suggestions (
  id UUID PRIMARY KEY,
  activity_id UUID NOT NULL REFERENCES activities(id),
  matched_time TSTZRANGE NOT NULL, -- e.g. ['2025-07-28 12:00+00', '2025-07-28 14:00+00')
  matched_location GEOGRAPHY(Point, 4326) NOT NULL, -- center point
  location_radius_m INTEGER NOT NULL DEFAULT 500, -- meters (500m = ~5-10 block range)
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE suggestions_to_tags (
  proposal_id UUID NOT NULL REFERENCES suggestions(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (proposal_id, tag_id)
);

CREATE TABLE suggestions_to_photos (
  proposal_id UUID NOT NULL REFERENCES suggestions(id) ON DELETE CASCADE,
  photo_id UUID NOT NULL REFERENCES photos(id) ON DELETE CASCADE,
  PRIMARY KEY (proposal_id, photo_id)
);

CREATE TABLE suggestions_to_users (
  proposal_id UUID NOT NULL REFERENCES suggestions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'rejected')),
  responded_at TIMESTAMPTZ,
  PRIMARY KEY (proposal_id, user_id)
);

CREATE TABLE events (
  id UUID PRIMARY KEY, -- UUIDv7 generated app-side
  proposal_id UUID REFERENCES suggestions(id) ON DELETE SET NULL,
  creator_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_id UUID NOT NULL REFERENCES activities(id),
  scheduled_time TIMESTAMPTZ NOT NULL,
  location GEOGRAPHY(Point, 4326) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE events_to_users (
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('invited', 'accepted', 'declined', 'maybe')),
  responded_at TIMESTAMPTZ,
  PRIMARY KEY (event_id, user_id)
);
