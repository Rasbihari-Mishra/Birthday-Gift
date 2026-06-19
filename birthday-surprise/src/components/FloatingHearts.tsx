import React from 'react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 });

  const heartStyle = (i: number) => ({
    position: 'absolute' as const,
    left: `${Math.random() * 100}%`,
    bottom: `-${i * 20}px`,
    fontSize: '24px',
    animation: `floatUp ${6 + (i % 4)}s ease-in infinite`,
    animationDelay: `${i * 0.4}s`,
    opacity: 0.8,
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: 300, overflow: 'hidden' }}>
      <style>{`
        @keyframes floatUp {
          from {
            transform: translateY(0) rotateZ(0deg);
            opacity: 0;
          }
          to {
            transform: translateY(-400px) rotateZ(20deg);
            opacity: 1;
          }
        }
      `}</style>
      {hearts.map((_, i) => (
        <div key={i} style={heartStyle(i)}>
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;