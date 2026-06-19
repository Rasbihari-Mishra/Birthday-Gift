import React from 'react';
import MemoryTimeline from '../components/MemoryTimeline';
import ReasonCard from '../components/ReasonCard';

const Timeline: React.FC = () => {
  const items = [
    { date: '2020-01-01', text: 'Met for the first time' },
    { date: '2021-06-15', text: 'Went on the first trip' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h3>Memories</h3>
      <MemoryTimeline items={items} />
      <div style={{ marginTop: 12 }}>
        <ReasonCard reason="You make me smile every day." index={1} />
      </div>
    </div>
  );
};

export default Timeline;
