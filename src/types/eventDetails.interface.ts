export type Ticket = {
  id: string;
  name: string;
  group: string;
  price: number;
  description: string | null;
  includes: string[];
  available: boolean;
  sortOrder: number;
};

export type EventDetail = {
  id: string;
  title: string;
  venue: string;
  bannerImage: string,
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  description: string;
  tickets: Ticket[];
};

export type EventWithDetail = {
  id: string;
  slug: string;
  detail: EventDetail | null;
};