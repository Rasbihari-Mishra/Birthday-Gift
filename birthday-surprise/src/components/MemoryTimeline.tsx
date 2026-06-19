import React from 'react';

type Item = { date?: string; text: string };

const MemoryTimeline: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} style={{ padding: 8, borderLeft: '2px solid #ffdce6', marginLeft: 8 }}>
          <div style={{ fontSize: 12, color: '#666' }}>{it.date}</div>
          <div>{it.text}</div>
        </div>
      ))}
    </div>
  );
};

export default MemoryTimeline;
