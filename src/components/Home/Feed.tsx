import React, { useState } from 'react';

interface Post {
  id: number;
  user: string;
  content: string;
  comments: string[];
  reactions: { likes: number; emojis: string[] };
}

const Feed: React.FC = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      user: 'John Doe',
      content: 'This is my first post!',
      comments: ['Great post!', 'Thanks for sharing.'],
      reactions: { likes: 10, emojis: ['👍', '❤️'] },
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Hello everyone!',
      comments: ['Welcome!', 'Hi Jane!'],
      reactions: { likes: 5, emojis: ['👋', '😊'] },
    },
  ]);

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Feed</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {posts.map(post => (
          <div key={post.id} className="mb-6 border-b pb-4 last:border-none">
            <h4 className="text-2xl font-semibold text-gray-900">{post.user}</h4>
            <p className="mt-2 text-gray-700">{post.content}</p>
            <div className="flex items-center mt-4 text-gray-600">
              <span className="mr-4">{post.reactions.likes} likes</span>
              <span>{post.reactions.emojis.join(' ')}</span>
            </div>
            <div className="mt-4 space-y-2">
              {post.comments.map((comment, index) => (
                <p key={index} className="text-sm text-gray-800 bg-gray-100 p-2 rounded">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;