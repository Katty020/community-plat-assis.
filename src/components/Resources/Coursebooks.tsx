import React from 'react';
import { motion } from 'framer-motion';

const Coursebooks: React.FC = () => {
  const coursebooks = [
    { id: 1, title: 'Algebra Coursebook', description: 'Comprehensive guide to algebra' },
    { id: 2, title: 'Physics Coursebook', description: 'Detailed physics concepts' },
    { id: 3, title: 'Chemistry Coursebook', description: 'In-depth chemistry topics' },
    { id: 4, title: 'Biology Coursebook', description: 'Extensive biology coverage' },
    { id: 5, title: 'History Coursebook', description: 'Historical events and analysis' },
    { id: 6, title: 'Geography Coursebook', description: 'Geographical concepts and maps' },
    { id: 7, title: 'Literature Coursebook', description: 'Literary works and analysis' },
    { id: 8, title: 'Computer Science Coursebook', description: 'Programming and algorithms' },
  ];

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-500 to-purple-600">Coursebooks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursebooks.map(book => (
          <motion.div
            key={book.id}
            className="bg-white p-4 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4 className="text-xl font-bold mb-2">{book.title}</h4>
            <p className="mb-4">{book.description}</p>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-2 rounded-lg">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Coursebooks;