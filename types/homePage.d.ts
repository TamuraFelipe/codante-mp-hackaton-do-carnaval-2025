// src/types/home.ts

export interface HomePageProps {
    city: string;
    date: string;
    search: string;
    sort: string;
    page: number;
    events: Event[];
    isLoading: boolean;
    filteredEvents: Event[];
    handleCityChange: (newCity: string) => void;
    handleDateChange: (newDate: string) => void;
    handleSearchChange: (newSearch: string) => void;
    handleSortChange: (newSort: string) => void;
    handlePageChange: () => void;
  }
  
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
  