import React, { useState } from 'react';
import EventCard from './EventCard';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

const EventList: React.FC = () => {
  const [filter, setFilter] = useState('');
  const events: Event[] = [
    { id: 1, title: 'React Workshop', description: 'Learn React from scratch', date: '2023-10-01', location: 'Online' },
    { id: 2, title: 'JavaScript Basics', description: 'Introduction to JavaScript', date: '2023-10-05', location: 'Online' },
  ];

  const filteredEvents = events.filter(event => event.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Filter events..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;