import { Suggestion } from "@/types";

export const dummySuggestions: Suggestion[] = [
  {
    id: "s1",
    raw_text: "Have a picnic in Central Park",
    created_at: "2025-08-01T09:00:00Z",
    updated_at: "2025-08-01T09:00:00Z",
    tags: [
      { id: "t1", name: "outdoors", created_at: "2025-07-01T00:00:00Z" },
      { id: "t2", name: "picnic", created_at: "2025-07-01T00:00:00Z" },
    ],
    users: [
      {
        user: {
          id: "u1",
          email: "jialin@example.com",
          phone_number: "+15555550001",
          display_name: "Jialin",
          created_at: "2025-06-01T00:00:00Z",
        },
        feedback: "like",
        responded_at: "2025-08-01T11:00:00Z",
      },
      {
        user: {
          id: "u2",
          email: "davis@example.com",
          phone_number: "+155555500020",
          display_name: "Davis",
          created_at: "2025-06-01T00:00:00Z",
        },
        feedback: "pending",
      },
    ],
  },
  {
    id: "s2",
    raw_text: "Go rollerblading along the Hudson River Greenway",
    created_at: "2025-08-01T10:00:00Z",
    updated_at: "2025-08-01T10:00:00Z",
    tags: [
      { id: "t3", name: "exercise", created_at: "2025-07-02T00:00:00Z" },
      { id: "t4", name: "river", created_at: "2025-07-02T00:00:00Z" },
    ],
    users: [
      {
        user: {
          id: "u3",
          email: "tammy@example.com",
          phone_number: "+15555550003",
          display_name: "Tammy",
          created_at: "2025-06-01T00:00:00Z",
        },
        feedback: "like",
        responded_at: "2025-08-01T12:30:00Z",
      },
      {
        user: {
          id: "u1",
          email: "jialin@example.com",
          phone_number: "+15555550001",
          display_name: "Jialin",
          created_at: "2025-06-01T00:00:00Z",
        },
        feedback: "like",
        responded_at: "2025-08-01T12:45:00Z",
      },
    ],
  },
];
