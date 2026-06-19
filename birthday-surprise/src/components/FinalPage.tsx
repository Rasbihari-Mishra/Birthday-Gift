import React from 'react';

const FinalPage: React.FC<{ message?: string; onRestart?: () => void }> = ({ message = "That's all — love you!", onRestart }) => {
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h2>{message}</h2>
      <button onClick={onRestart} style={{ marginTop: 12, padding: '8px 12px' }}>
        Restart
      </button>
    </div>
  );
};

export default FinalPage;
