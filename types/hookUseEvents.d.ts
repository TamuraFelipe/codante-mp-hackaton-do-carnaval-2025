export interface Event {
  id: number;
  title: string;
  description: string;
  date_time: string;
  address: string;
  complete_address: string;
  city: string;
  neighborhood: string;
  price: string;
  event_url: string;
}

export interface UseEventsResponse {
  events: Event[];
  isLoading: boolean;
}