import React from 'react';
import Announcements from '../components/Home/Announcements';
import Feed from '../components/Home/Feed';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Announcements />
      <Feed />
    </div>
  );
};

export default Home;