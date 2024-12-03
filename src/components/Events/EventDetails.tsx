import React from 'react';
import { useParams } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  prerequisites: string;
}

const events: Event[] = [
  { id: 1, title: 'React Workshop', description: 'Learn React from scratch', date: '2023-10-01', location: 'Online', capacity: 100, prerequisites: 'Basic JavaScript knowledge' },
  { id: 2, title: 'JavaScript Basics', description: 'Introduction to JavaScript', date: '2023-10-05', location: 'Online', capacity: 50, prerequisites: 'None' },
];

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(event => event.id === parseInt(id || '0'));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Capacity:</strong> {event.capacity}</p>
        <p><strong>Prerequisites:</strong> {event.prerequisites}</p>
      </div>
    </div>
  );
};

export default EventDetails;