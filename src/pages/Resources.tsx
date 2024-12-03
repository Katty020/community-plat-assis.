import React from 'react';
import LessonPlans from '../components/Resources/LessonPlans';
import Coursebooks from '../components/Resources/Coursebooks';

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Resources</h2>
      <LessonPlans />
      <Coursebooks />
    </div>
  );
};

export default Resources;