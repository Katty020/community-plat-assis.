import React, { useState } from 'react';

interface FeatureRequest {
  id: number;
  title: string;
  description: string;
  votes: number;
}

const FeatureWishlist: React.FC = () => {
  const [features, setFeatures] = useState<FeatureRequest[]>([
    { id: 1, title: 'Dark Mode', description: 'Add a dark mode option', votes: 10 },
    { id: 2, title: 'Mobile App', description: 'Create a mobile app version', votes: 8 },
  ]);

  const handleVote = (id: number) => {
    setFeatures(features.map(feature => 
      feature.id === id ? { ...feature, votes: feature.votes + 1 } : feature
    ));
  };

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Feature Wishlist</h3>
      <div className="bg-white p-4 rounded shadow">
        {features.map(feature => (
          <div key={feature.id} className="mb-4">
            <h4 className="text-xl font-bold">{feature.title}</h4>
            <p>{feature.description}</p>
            <div className="flex items-center">
              <button onClick={() => handleVote(feature.id)} className="bg-blue-500 text-white p-2 rounded mr-2">Vote</button>
              <span>{feature.votes} votes</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureWishlist;