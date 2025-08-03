import { Event } from "@/types";

export const dummyEvents: Event[] = [
  {
    id: "e1",
    raw_text: "Tour the New York Transit Museum",
    scheduled_time: "2025-08-12T18:00:00Z",
    location: {
      id: "l1",
      address: "99 Schermerhorn St, Brooklyn, NY",
      lat: 40.6903,
      lng: -73.9891,
      created_at: "2025-07-01T00:00:00Z",
    },
    created_at: "2025-08-01T13:30:00Z",
    updated_at: "2025-08-01T13:30:00Z",
    users: [
      {
        user: {
          id: "u1",
          email: "jialin@example.com",
          phone_number: "+15555550001",
          display_name: "Jialin",
          created_at: "2025-06-01T00:00:00Z",
        },
        status: "yes",
        responded_at: "2025-08-01T14:00:00Z",
      },
      {
        user: {
          id: "u2",
          email: "davis@example.com",
          phone_number: "+15555550002",
          display_name: "Davis",
          created_at: "2025-06-01T00:00:00Z",
        },
        status: "maybe",
        responded_at: "2025-08-01T14:05:00Z",
      },
      {
        user: {
          id: "u3",
          email: "tammy@example.com",
          phone_number: "+15555550003",
          display_name: "Tammy",
          created_at: "2025-06-01T00:00:00Z",
        },
        status: "pending",
      },
    ],
  },
  {
    id: "e2",
    raw_text: "Attend a jazz night at Smalls",
    scheduled_time: "2025-08-14T19:00:00Z",
    location: {
      id: "l2",
      address: "183 W 10th St, New York, NY",
      lat: 40.7347,
      lng: -74.0027,
      created_at: "2025-07-02T00:00:00Z",
    },
    created_at: "2025-08-01T14:30:00Z",
    updated_at: "2025-08-01T14:30:00Z",
    users: [
      {
        user: {
          id: "u2",
          email: "davis@example.com",
          phone_number: "+15555550002",
          display_name: "Davis",
          created_at: "2025-06-01T00:00:00Z",
        },
        status: "yes",
        responded_at: "2025-08-01T15:00:00Z",
      },
      {
        user: {
          id: "u3",
          email: "tammy@example.com",
          phone_number: "+15555550003",
          display_name: "Tammy",
          created_at: "2025-06-01T00:00:00Z",
        },
        status: "no",
        responded_at: "2025-08-01T15:10:00Z",
      },
    ],
  },
];
