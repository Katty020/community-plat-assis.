import React, { useState } from 'react';

interface Message {
  id: number;
  user: string;
  text: string;
}

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: 'John Doe', text: message }]);
      setMessage('');
    }
  };

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">Chat Room</h3>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <div className="h-64 overflow-y-auto border border-gray-300 p-2 rounded">
            {messages.map(msg => (
              <div key={msg.id} className="mb-2">
                <strong>{msg.user}:</strong> <span>{msg.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded"
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded ml-2">Send</button>
        </div>
      </div>
    </section>
  );
};

export default ChatRoom;