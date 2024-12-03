import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isRSVPed, setIsRSVPed] = useState(false);

  const handleRSVP = () => {
    setIsRSVPed(!isRSVPed);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="mb-2">{event.description}</p>
      <p className="text-sm text-gray-600">Date: {event.date}</p>
      <p className="text-sm text-gray-600">Location: {event.location}</p>
      <button
        onClick={handleRSVP}
        className={`mt-2 p-2 rounded ${isRSVPed ? 'bg-red-500' : 'bg-blue-500'} text-white`}
      >
        {isRSVPed ? 'Cancel RSVP' : 'RSVP'}
      </button>
      <Link to={`/events/${event.id}`} className="block mt-2 text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;