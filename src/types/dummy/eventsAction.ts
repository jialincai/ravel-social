import { Event } from "@/types";
import { dummyEvents } from "@/types/dummy/events";
import { produce } from "immer";

let events: Event[] = [...dummyEvents];

export const getEvents = () => events;

export const updateEventStatus = (
  eventId: string,
  userId: string,
  status: "yes" | "maybe" | "no",
) => {
  events = produce(events, (draft) => {
    const event = draft.find((e) => e.id === eventId);
    if (!event) return;
    const user = event.users.find((u) => u.user.id === userId);
    if (!user) return;
    user.status = user.status === status ? "pending" : status;
    user.responded_at = new Date().toISOString();
  });
};
