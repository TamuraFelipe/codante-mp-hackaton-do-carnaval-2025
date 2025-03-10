'use client';

import React from 'react';
import SelectCities from './ui/SelectCities';
import Date from './ui/Date';
import Search from './ui/Search';
import Sort from './ui/Sort';
import { FiltersProps } from '../types';



const Filters: React.FC<FiltersProps> = ({
  city, date, search, sort,
  onCityChange, onDateChange, onSearchChange, onSortChange
}) => {
  
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <SelectCities 
        city={city}
        onCityChange={onCityChange}
      />
      
      <Date 
        date={date}
        onDateChange={onDateChange}
      />

      <Search 
        search={search}
        onSearchChange={onSearchChange}
      />

      <Sort 
        sort={sort}
        onSortChange={onSortChange}
      />
    </div>
  );
};

export default Filters;
