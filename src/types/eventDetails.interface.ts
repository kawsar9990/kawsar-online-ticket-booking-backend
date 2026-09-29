export type TicketGroup = "BUNDLE" | "SOLO" | "TEAM";

export type Ticket = {
  id: string;
  name: string;
  group: TicketGroup;
  price: number;
  description: string | null;
  includes: string[];
  available: boolean;
  sortOrder: number;
};

export type EventContact = {
  role: string;
  name: string;
  phone: string;
};

export type EventDetail = {
  id: string;
  title: string;
  venue: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  description: string;
  contacts: EventContact[] | null;
  tickets: Ticket[];
};

export type EventWithDetail = {
  id: string;
  slug: string;
  detail: EventDetail | null;
};