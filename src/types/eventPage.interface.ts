export type EventStatus =
  | "LIVE_NOW"
  | "UPCOMING"
  | "EXPIRED"
  | "CANCELLED";

export interface Event {
  id: string;
  title: string;
  slug: string;
  category: string;
  bannerImage: string;

  startDate: Date;
  startTime?: string | null;
  endDate?: Date | null;
  endTime?: string | null;

  venue: string;
  location: string;

  startingPrice: number;
  currency: string;

  isLive: boolean;
  status: EventStatus;

  createdAt: Date;
  updatedAt: Date;
}

export type EventList = Event[];