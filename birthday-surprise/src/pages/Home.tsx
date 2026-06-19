import React from 'react';
import IntroScreen from './IntroPage';
import FloatingHearts from '../components/FloatingHearts';
import AnimatedStars from '../components/AnimatedStars';

const Home: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <IntroScreen title="Welcome" subtitle="Click start to begin the surprise" onStart={() => {}} />
      <FloatingHearts />
      <AnimatedStars width={400} height={120} />
    </div>
  );
};

export default Home;
