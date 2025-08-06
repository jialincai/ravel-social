import { dummyUsers } from "./users";
import { dummyLocations } from "./locations";
import { Event } from "@/types";

const userById = (id: string) => dummyUsers.find((u) => u.id === id)!;
const locationById = (id: string) => dummyLocations.find((l) => l.id === id)!;

export const dummyEvents: Event[] = [
  {
    id: "e1",
    raw_text: "Tour the New York Transit Museum",
    scheduled_time: "2025-08-12T18:00:00Z",
    location: locationById("l1"),
    created_at: "2025-08-01T13:30:00Z",
    updated_at: "2025-08-01T13:30:00Z",
    users: [
      { user: userById("u1"), status: "pending" },
      {
        user: userById("u2"),
        status: "yes",
        responded_at: "2025-08-01T14:05:00Z",
      },
      {
        user: userById("u3"),
        status: "no",
        responded_at: "2025-08-01T14:10:00Z",
      },
    ],
  },
  {
    id: "e2",
    raw_text: "Picnic at Central Park",
    scheduled_time: "2025-08-15T13:00:00Z",
    location: locationById("l2"),
    created_at: "2025-08-02T10:00:00Z",
    updated_at: "2025-08-02T10:00:00Z",
    users: [
      {
        user: userById("u1"),
        status: "yes",
        responded_at: "2025-08-02T10:15:00Z",
      },
      { user: userById("u4"), status: "pending" },
    ],
  },
  {
    id: "e3",
    raw_text: "Jazz night at Smalls",
    scheduled_time: "2025-08-20T20:00:00Z",
    location: locationById("l3"),
    created_at: "2025-08-03T11:00:00Z",
    updated_at: "2025-08-03T11:00:00Z",
    users: [
      {
        user: userById("u1"),
        status: "no",
        responded_at: "2025-08-03T11:20:00Z",
      },
      {
        user: userById("u3"),
        status: "maybe",
        responded_at: "2025-08-03T11:22:00Z",
      },
      {
        user: userById("u4"),
        status: "yes",
        responded_at: "2025-08-03T11:25:00Z",
      },
      { user: userById("u5"), status: "pending" },
    ],
  },
];
