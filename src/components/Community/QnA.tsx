import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
  votes: number;
}

const QnA: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, question: 'How to start with React?', answer: 'You can start by reading the official documentation.', votes: 5 },
    { id: 2, question: 'What is Redux?', answer: 'Redux is a state management library for JavaScript apps.', votes: 3 },
  ]);

  const handleVote = (id: number) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, votes: q.votes + 1 } : q
    ));
  };

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Q&A</h3>
      <div className="bg-white p-4 rounded shadow">
        {questions.map(q => (
          <div key={q.id} className="mb-4">
            <h4 className="text-xl font-bold">{q.question}</h4>
            <p>{q.answer}</p>
            <div className="flex items-center">
              <button onClick={() => handleVote(q.id)} className="bg-blue-500 text-white p-2 rounded mr-2">Vote</button>
              <span>{q.votes} votes</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QnA;