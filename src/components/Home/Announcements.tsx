import React from 'react';
import { motion } from 'framer-motion';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Announcements: React.FC = () => {
  const announcements: Announcement[] = [
    { id: 1, title: 'Welcome to TutorHub', content: '<p>We are excited to have you here!</p>', date: '2023-10-01' },
    { id: 2, title: 'New Features Released', content: '<p>Check out the new features we have added.</p>', date: '2023-10-05' },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-4xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-600">
        Announcements
      </h2>
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        {announcements.map(announcement => (
          <motion.div
            key={announcement.id}
            className="mb-6 p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
            <p className="text-sm text-gray-200 mb-4">{announcement.date}</p>
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: announcement.content }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;