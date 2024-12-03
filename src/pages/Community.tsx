import React from 'react';
import ChatRoom from '../components/Community/ChatRoom';
import QnA from '../components/Community/QnA';
import FeatureWishlist from '../components/Community/FeatureWishlist';

const Community: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Community</h2>
      <ChatRoom />
      <QnA />
      <FeatureWishlist />
    </div>
  );
};

export default Community;