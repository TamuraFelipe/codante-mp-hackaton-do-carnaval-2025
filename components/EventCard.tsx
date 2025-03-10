import React from 'react';
import { EventCardProps } from '../types';

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isFinished = new Date(event.date_time) < new Date();
  const eventPrice = event.price;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="font-bold text-gray-800">{event.title}</h3>
      <h2>{event.city}</h2>
      <p className='text-gray-600 text-sm'>{event.description}</p>
      <div className='flex items-center gap-2 mt-2 mb-2'>
        <span className={`badge text-white px-2 py-0.5 text-[12px] rounded-2xl ${isFinished ? 'bg-red-400' : 'bg-green-400'}`}>
          {isFinished ? 'Finalizado' : 'Em andamento'}
        </span>
        
        <span className={`badge text-white ${eventPrice === "" ? "" : "px-2 py-0.5"} text-[12px] rounded-2xl ${eventPrice === 'Grátis' ? 'bg-green-400' : 'bg-yellow-400'}`}>
          {eventPrice}
        </span>
      
      </div>
      <div className="mt-2 flex items-center gap-2">
        <i className="fa-solid fa-calendar-days text-gray-500"></i>
        <span className='text-gray-600'>{new Date(event.date_time).toLocaleString()}</span>
      </div>
      
      {event.event_url && (
        <a className='text-blue-400 text-[14px] hover:underline' href={event.event_url} target="_blank" rel="noopener noreferrer">
          Ver mais
        </a>
      )}
    </div>
  );
};

export default EventCard;
