import React, { useState } from 'react';

const randomPosition = () => ({ left: Math.random() * 70 + '%', top: Math.random() * 60 + '%' });

const MovingNoButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [pos, setPos] = useState(randomPosition());

  return (
    <div style={{ position: 'relative', height: 140 }}>
      <button
        onMouseEnter={() => setPos(randomPosition())}
        onClick={onClick}
        style={{ position: 'absolute', transition: 'all 200ms ease', ...pos }}
      >
        No
      </button>
    </div>
  );
};

export default MovingNoButton;
