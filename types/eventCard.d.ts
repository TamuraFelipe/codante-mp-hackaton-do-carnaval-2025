export interface EventCardProps {
  event: {
    id: number;
    title: string;
    city: string;
    description: string;
    date_time: string;
    price: string;
    event_url: string;
  };
}