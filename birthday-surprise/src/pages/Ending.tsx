import React from 'react';
import FinalPage from '../components/FinalPage';

const Ending: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <FinalPage message="Thank you for sharing this moment" onRestart={() => window.location.reload()} />
    </div>
  );
};

export default Ending;
