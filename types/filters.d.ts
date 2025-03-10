export interface DateProps {
    date: string
    onDateChange: (date: string) => void
}

export interface SearchProps {
    search: string;
    onSearchChange: (search: string) => void;
}

export interface SelectCitiesProps {
    city: string;
    onCityChange: (city: string) => void;
}

export interface SortProps {
    sort: string;
    onSortChange: (sort: string) => void;
}

export interface FiltersProps {
  city: string;
  date: string;
  search: string;
  sort: string;
  onCityChange: (city: string) => void;
  onDateChange: (date: string) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: string) => void;
}