// src/types/user.ts
export type User = {
  id: string;
  email: string;
  phone_number: string;
  display_name: string;
  created_at: string;
};

// src/types/input.ts
export type Input = {
  id: string;
  user_id: string;
  raw_text: string;
  created_at: string;
  extracted_at?: string;
  processed: boolean;
};

// src/types/tag.ts
export type Tag = {
  id: string;
  name: string;
  created_at: string;
};

// src/types/location.ts
export type Location = {
  id: string;
  address: string;
  lat: number;
  lng: number;
  created_at: string;
};

// src/types/suggestion.ts
export type Suggestion = {
  id: string;
  raw_text: string;
  created_at: string;
  updated_at: string;
  tags: Tag[];
  users: {
    user: User;
    feedback: "like" | "dislike" | "pending";
    responded_at?: string;
  }[];
};

// src/types/event.ts
export type Event = {
  id: string;
  raw_text: string;
  scheduled_time: string;
  location: Location;
  created_at: string;
  updated_at: string;
  users: {
    user: User;
    status: "yes" | "maybe" | "no" | "pending";
    responded_at?: string;
  }[];
};
