import React from 'react';
import { motion } from 'framer-motion';

const LessonPlans: React.FC = () => {
  const lessonPlans = [
    { id: 1, title: 'Math Lesson Plan', description: 'Basic math concepts' },
    { id: 2, title: 'Science Lesson Plan', description: 'Introduction to physics' },
  ];

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">Lesson Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessonPlans.map(plan => (
          <motion.div
            key={plan.id}
            className="bg-white p-4 rounded shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
            <p>{plan.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LessonPlans;