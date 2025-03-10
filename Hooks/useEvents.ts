'use client';
import { useState, useEffect, useRef } from 'react';
import { Event, UseEventsResponse } from '../types';

export const useEvents = (
  city?: string,
  date?: string,
  sort?: string,
  page?: number
): UseEventsResponse => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(0);

  // Referência para armazenar o valor anterior de city e date
  const prevCityRef = useRef<string | undefined>(city);
  const prevDateRef = useRef<string | undefined>(date);

  const buildUrl = () => {
    let url = process.env.API_URL || 'https://apis.codante.io/api/bloquinhos2025/agenda';
    console.log('API_URL:', url);

    const params: Record<string, string> = {};

    if (city) params.city = city;
    if (date) params.date = date;
    if (sort) params.sort = sort;
    if (page) params.page = String(page);

    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    return url;
  };

  const fetchEvents = async () => {
    setIsLoading(true);
    const url = buildUrl();
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setEvents((prevEvents) => [...prevEvents, ...data.data]);
      setQuantity(data.meta.total);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Verifica se houve mudança em city ou date
    if (city !== prevCityRef.current || date !== prevDateRef.current) {
      setEvents([]); // Limpa os eventos quando city ou date mudarem
    }

    // Atualiza as referências de city e date
    prevCityRef.current = city;
    prevDateRef.current = date;

    fetchEvents(); // Faz a requisição para buscar os eventos
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, date, page]);

  return { events, isLoading, quantity };
};
