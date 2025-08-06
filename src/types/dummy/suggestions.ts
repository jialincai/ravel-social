import { Suggestion } from "@/types";
import { dummyTags } from "@/types/dummy/tags";
import { dummyUsers } from "@/types/dummy/users";

const userById = (id: string) => dummyUsers.find((u) => u.id === id)!;
const tagByName = (name: string) => dummyTags.find((t) => t.name === name)!;

export const dummySuggestions: Suggestion[] = [
  {
    id: "s10",
    raw_text: "Go for a morning bike ride on Governors Island",
    created_at: "2025-08-10T08:00:00Z",
    updated_at: "2025-08-10T08:00:00Z",
    tags: [tagByName("biking"), tagByName("outdoors"), tagByName("exercise")],
    users: [
      {
        user: userById("u1"),
        feedback: "like",
        responded_at: "2025-08-10T09:00:00Z",
      },
      {
        user: userById("u4"),
        feedback: "pending",
      },
    ],
  },
  {
    id: "s11",
    raw_text: "Try a new coffee shop for Sunday brunch",
    created_at: "2025-08-11T11:00:00Z",
    updated_at: "2025-08-11T11:00:00Z",
    tags: [tagByName("coffee"), tagByName("brunch")],
    users: [
      {
        user: userById("u1"),
        feedback: "pending",
      },
      {
        user: userById("u2"),
        feedback: "like",
        responded_at: "2025-08-11T11:30:00Z",
      },
      {
        user: userById("u3"),
        feedback: "like",
        responded_at: "2025-08-11T11:45:00Z",
      },
    ],
  },
  {
    id: "s12",
    raw_text: "Host a board games night at home",
    created_at: "2025-08-12T19:00:00Z",
    updated_at: "2025-08-12T19:00:00Z",
    tags: [tagByName("games")],
    users: [
      {
        user: userById("u1"),
        feedback: "pending",
      },
      {
        user: userById("u5"),
        feedback: "like",
        responded_at: "2025-08-12T19:30:00Z",
      },
    ],
  },
  {
    id: "s13",
    raw_text: "Sing karaoke at Gagopa Karaoke",
    created_at: "2025-08-13T21:00:00Z",
    updated_at: "2025-08-13T21:00:00Z",
    tags: [tagByName("karaoke"), tagByName("nightlife")],
    users: [
      {
        user: userById("u1"),
        feedback: "like",
        responded_at: "2025-08-13T21:30:00Z",
      },
      {
        user: userById("u3"),
        feedback: "pending",
      },
    ],
  },
  {
    id: "s14",
    raw_text: "Volunteer at the neighborhood community garden",
    created_at: "2025-08-14T08:00:00Z",
    updated_at: "2025-08-14T08:00:00Z",
    tags: [tagByName("volunteering"), tagByName("outdoors")],
    users: [
      {
        user: userById("u1"),
        feedback: "pending",
      },
      {
        user: userById("u2"),
        feedback: "like",
        responded_at: "2025-08-14T08:20:00Z",
      },
    ],
  },
];
