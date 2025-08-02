// src/types/user.ts
export type User = {
  id: string;
  email: string;
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

// src/types/suggestion.ts
export type Suggestion = {
  id: string;
  raw_text: string;
  scheduled_time?: string;
  location?: {
    lat: number;
    lng: number;
  };
  created_at: string;
  updated_at: string;
  tags?: Tag[];
  feedback?: SuggestionFeedback[];
};

export type SuggestionFeedback = {
  user_id: string;
  feedback: "like" | "dislike";
};

// src/types/event.ts
export type Event = {
  id: string;
  suggestion_id: string;
  scheduled_time: string;
  location: {
    lat: number;
    lng: number;
  };
  created_at: string;
  updated_at: string;
  invitees?: EventInvitee[];
};

export type EventInvitee = {
  user_id: string;
  status: "accepted" | "declined" | "tentative";
  responded_at?: string;
};
