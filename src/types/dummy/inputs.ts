import { Input } from "@/types";

export const dummyInputs: Input[] = [
  {
    id: "i1",
    user_id: "u1",
    raw_text: "Thrifting in Brooklyn",
    created_at: "2025-07-30T08:00:00Z",
    extracted_at: "2025-07-30T08:10:00Z",
    processed: true,
  },
  {
    id: "i2",
    user_id: "u2",
    raw_text: "Visit a board game cafe",
    created_at: "2025-07-30T09:00:00Z",
    extracted_at: "2025-07-30T09:05:00Z",
    processed: true,
  },
  {
    id: "i3",
    user_id: "u3",
    raw_text: "Bike across the Brooklyn Bridge",
    created_at: "2025-07-30T10:00:00Z",
    extracted_at: "2025-07-30T10:15:00Z",
    processed: false,
  },
];
