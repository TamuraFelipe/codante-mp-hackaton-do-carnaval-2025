'use client'; // Marca o arquivo como cliente

import React, { useState } from 'react';
import { useEvents } from '../Hooks/useEvents';
import Filters from '../components/Filters';
import EventCard from '../components/EventCard';
import SkeletonCard from '../components/SkeletonCard';

const HomePage = () => {
  const [city, setCity] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('desc');
  const [page, setPage] = useState<number>(1);

  const { events, isLoading } = useEvents(city, date, sort, page);

  // Função para filtrar os eventos de acordo com o texto de pesquisa
  const filteredEvents = events.filter((event) => {
    if (!search) return true; // Se não houver pesquisa, mostra todos os eventos
    const lowerCaseSearch = search.toLowerCase();
    return (
      event.title.toLowerCase().includes(lowerCaseSearch) ||
      event.description.toLowerCase().includes(lowerCaseSearch)
    );
  });

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    setPage(1);
  };
  const handleDateChange = (newDate: string) => {
    setDate(newDate);
    setPage(1);
  };
  const handleSearchChange = (newSearch: string) => setSearch(newSearch);
  const handleSortChange = (newSort: string) => setSort(newSort);
  const handlePageChange = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className="container mx-auto p-4">
      <Filters
        city={city}
        date={date}
        search={search}
        sort={sort}
        onCityChange={handleCityChange}
        onDateChange={handleDateChange}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.length > 0 ? (
            // Ordenando os eventos de acordo com o valor de 'sort' (asc ou desc)
            filteredEvents
              .sort((a, b) => {
                const dateA = new Date(a.date_time);
                const dateB = new Date(b.date_time);
                if (sort === 'asc') {
                  return dateA.getTime() - dateB.getTime(); // Ordem crescente
                } else {
                  return dateB.getTime() - dateA.getTime(); // Ordem decrescente
                }
              })
              .map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <div className="col-span-full text-center text-lg text-gray-600">
              Nenhum evento encontrado.
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded mt-4"
          onClick={handlePageChange}
        >
          Carregar mais
        </button>
      </div>
    </div>
  );
};

export default HomePage;
