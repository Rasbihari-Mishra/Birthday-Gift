import React from 'react';
import QuestionCard from '../pages/QuestionsPage';
import MovingNoButton from './MovingNoButton';

const Questions: React.FC = () => {
  const handleAnswer = (i: number) => console.log('answered', i);

  return (
    <div style={{ padding: 20 }}>
      <QuestionCard question="Do you like surprises?" options={["Yes","No"]} onAnswer={handleAnswer} />
      <div style={{ marginTop: 16 }}>
        <MovingNoButton onClick={() => alert('No clicked')} />
      </div>
    </div>
  );
};

export default Questions;
