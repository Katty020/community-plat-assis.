import React from 'react';
import EventList from '../components/Events/EventList';

const Events: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Events</h2>
      <EventList />
    </div>
  );
};

export default Events;