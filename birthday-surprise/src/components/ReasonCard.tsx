import React from 'react';

const ReasonCard: React.FC<{ reason: string; index?: number }> = ({ reason, index }) => {
  return (
    <div style={{ padding: 12, borderBottom: '1px solid #f0f0f0' }}>
      <strong>{index ? `${index}. ` : ''}</strong>
      <span>{reason}</span>
    </div>
  );
};

export default ReasonCard;
