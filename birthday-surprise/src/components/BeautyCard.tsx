import React from 'react';

const BeautyCard: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return (
    <div style={{ padding: 18, borderRadius: 12, background: 'linear-gradient(135deg,#fff4f7,#fff)', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
      {children}
    </div>
  );
};

export default BeautyCard;
